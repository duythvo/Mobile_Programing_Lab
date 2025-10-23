import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import dbPromise from "../src/db/db";

const formatVND = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

export default function CartScreen() {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  async function load() {
    const db = await dbPromise;
    const rows = (await db.getAllAsync(`
      SELECT c.id, c.product_id, c.qty, p.name, p.price, p.stock
      FROM cart_items c JOIN products p ON p.product_id = c.product_id
      ORDER BY c.id DESC
    `)) as any[];
    setItems(rows);
  }

  useEffect(() => {
    load();
  }, []);

  async function updateQty(pid: string, newQty: number) {
    const db = await dbPromise;
    // nếu <=0 xóa
    if (newQty <= 0) {
      await db.runAsync("DELETE FROM cart_items WHERE product_id=?", [pid]);
    } else {
      // kiểm tra tồn kho trước khi cập nhật
      const row = (await db.getFirstAsync(
        "SELECT stock FROM products WHERE product_id=?",
        [pid]
      )) as { stock: number } | undefined;
      const stock = row?.stock ?? 0;
      if (newQty > stock) {
        Alert.alert("Không thể cập nhật", "Số lượng vượt quá tồn kho.");
        return;
      }

      await db.runAsync("UPDATE cart_items SET qty=? WHERE product_id=?", [newQty, pid]);
    }
    await load();
  }

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id)}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.meta}>{formatVND(item.price)} • Tồn: {item.stock}</Text>
              <Text style={{ marginTop: 6 }}>
                {item.qty} x {formatVND(item.price)} = {formatVND(item.qty * item.price)}
              </Text>
            </View>

            <View style={styles.controls}>
              <TouchableOpacity onPress={() => updateQty(item.product_id, item.qty - 1)} style={styles.controlBtn}>
                <Text style={styles.controlText}>➖</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateQty(item.product_id, item.qty + 1)} style={styles.controlBtn}>
                <Text style={styles.controlText}>➕</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateQty(item.product_id, 0)} style={styles.removeBtn}>
                <Text style={{ color: "#EF4444" }}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "700" }}>Tạm tính: {formatVND(subtotal)}</Text>

        <TouchableOpacity
          onPress={() => router.push("/invoice")}
          style={styles.checkoutBtn}
        >
          <Text style={styles.checkoutText}>Xem hoá đơn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FAFAFB" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    alignItems: "center",
  },
  productName: { fontWeight: "600", fontSize: 15 },
  meta: { color: "#6B7280", marginTop: 4 },
  controls: { marginLeft: 12, alignItems: "center" },
  controlBtn: {
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  controlText: { fontSize: 16 },
  removeBtn: { marginTop: 4 },
  checkoutBtn: {
    backgroundColor: "#0066FF",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontWeight: "700" },
});
