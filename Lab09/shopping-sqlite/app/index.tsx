import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import dbPromise from "../src/db/db";

type Product = {
  product_id: string;
  name: string;
  price: number;
  stock: number;
};

type CartItem = { qty: number };

const formatVND = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

// Loại bỏ dấu để search không phân biệt dấu/không dấu
function removeDiacritics(str: string) {
  // Normalize then remove combining diacritical marks
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();

  async function loadAllProducts() {
    const db = await dbPromise;
    const rows = (await db.getAllAsync("SELECT * FROM products")) as Product[];
    setProducts(rows);
  }

  useEffect(() => {
    (async () => {
      await loadAllProducts();
    })();
  }, []);

  // Client-side filter + accent-insensitive search
  const filtered = products.filter((p) => {
    const bySearch = search
      ? removeDiacritics(p.name).includes(removeDiacritics(search))
      : true;
    const byPrice = maxPrice ? p.price <= Number(maxPrice) : true;
    return bySearch && byPrice;
  });

  async function addToCart(product_id: string) {
    const db = await dbPromise;

    const stockRow = (await db.getFirstAsync(
      "SELECT stock FROM products WHERE product_id=?",
      [product_id]
    )) as { stock: number } | undefined;
    const stock = stockRow?.stock ?? 0;

    const exist = (await db.getFirstAsync(
      "SELECT qty FROM cart_items WHERE product_id=?",
      [product_id]
    )) as CartItem | undefined;

    const qty = exist ? exist.qty + 1 : 1;

    if (qty > stock) {
      Alert.alert("Không thể thêm", "Số lượng yêu cầu vượt quá tồn kho.");
      return;
    }

    if (exist) {
      await db.runAsync("UPDATE cart_items SET qty=? WHERE product_id=?", [
        qty,
        product_id,
      ]);
    } else {
      await db.runAsync(
        "INSERT INTO cart_items(product_id, qty) VALUES(?,?)",
        [product_id, 1]
      );
    }

    Alert.alert("Thành công", "Đã thêm vào giỏ hàng.");
    await loadAllProducts(); // cập nhật nếu bạn muốn thay đổi UI dựa trên stock
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>

      <TextInput
        placeholder="Tìm kiếm (hỗ trợ dấu/không dấu)..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <TextInput
        placeholder="Lọc theo giá tối đa (₫)"
        value={maxPrice}
        onChangeText={setMaxPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.product_id}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productMeta}>
                {formatVND(item.price)} • Tồn: {item.stock}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.btn, item.stock <= 0 && styles.btnDisabled]}
              disabled={item.stock <= 0}
              onPress={() => addToCart(item.product_id)}
            >
              <Text style={styles.btnText}>
                {item.stock <= 0 ? "Hết hàng" : "Thêm vào giỏ"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>Không có sản phẩm</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.cartBtnText}>Xem giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FAFAFB" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  sep: { height: 8 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  productName: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  productMeta: { color: "#6B7280" },
  btn: {
    backgroundColor: "#0066FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  btnDisabled: { backgroundColor: "#A1A1AA" },
  btnText: { color: "#fff", fontWeight: "600" },
  cartBtn: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  cartBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
