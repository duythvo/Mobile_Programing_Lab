import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import dbPromise from "../src/db/db";

const formatVND = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

export default function InvoiceScreen() {
  const [items, setItems] = useState<any[]>([]);

  async function ensureOrderTables(db: any) {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS orders(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        total REAL
      );
    `);
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS order_items(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        product_id TEXT,
        qty INTEGER,
        price REAL
      );
    `);
  }

  async function load() {
    const db = await dbPromise;
    const rows = (await db.getAllAsync(`
      SELECT c.id, c.product_id, c.qty, p.name, p.price, p.stock
      FROM cart_items c JOIN products p ON p.product_id = c.product_id
    `)) as any[];
    setItems(rows);
  }

  useEffect(() => {
    (async () => {
      const db = await dbPromise;
      await ensureOrderTables(db);
      await load();
    })();
  }, []);

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  // Trước khi checkout: kiểm tra tồn kho cho từng item, nếu ok -> cập nhật stock, insert order/order_items, clear cart
  async function checkout() {
    const db = await dbPromise;
    if (items.length === 0) {
      Alert.alert("Thông báo", "Giỏ hàng trống.");
      return;
    }

    // 1) Kiểm tra tồn kho cho mỗi item
    for (const it of items) {
      const p = (await db.getFirstAsync("SELECT stock FROM products WHERE product_id=?", [it.product_id])) as { stock: number } | undefined;
      const stock = p?.stock ?? 0;
      if (it.qty > stock) {
        Alert.alert("Không thể thanh toán", `Sản phẩm "${it.name}" chỉ còn ${stock} trong kho.`);
        return;
      }
    }

    // 2) Tạo order
    await ensureOrderTables(db);
    await db.runAsync("INSERT INTO orders(date, total) VALUES(?, ?)", [new Date().toISOString(), total]);

    // Lấy id vừa insert
    const last = (await db.getFirstAsync("SELECT last_insert_rowid() AS id")) as { id: number };
    const orderId = last.id;

    // 3) Insert order_items và giảm stock
    for (const it of items) {
      await db.runAsync("INSERT INTO order_items(order_id, product_id, qty, price) VALUES(?,?,?,?)", [
        orderId,
        it.product_id,
        it.qty,
        it.price,
      ]);
      // trừ tồn kho
      const p = (await db.getFirstAsync("SELECT stock FROM products WHERE product_id=?", [it.product_id])) as { stock: number } | undefined;
      const newStock = Math.max(0, (p?.stock ?? 0) - it.qty);
      await db.runAsync("UPDATE products SET stock=? WHERE product_id=?", [newStock, it.product_id]);
    }

    // 4) Clear cart
    await db.runAsync("DELETE FROM cart_items");
    Alert.alert("Thành công", "Thanh toán thành công. Cảm ơn bạn!");
    setItems([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoá đơn</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "600" }}>{item.name}</Text>
              <Text style={{ color: "#6B7280" }}>{item.qty} x {formatVND(item.price)}</Text>
            </View>
            <Text>{formatVND(item.qty * item.price)}</Text>
          </View>
        )}
      />

      <View style={{ marginTop: 12 }}>
        <Text>Tạm tính: {formatVND(subtotal)}</Text>
        <Text>VAT (10%): {formatVND(vat)}</Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Tổng: {formatVND(total)}</Text>
      </View>

      <TouchableOpacity onPress={checkout} style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FAFAFB" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  checkoutBtn: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  checkoutText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
