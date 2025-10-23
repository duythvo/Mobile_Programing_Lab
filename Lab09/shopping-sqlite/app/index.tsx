import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import dbPromise from "../src/db/db"; // ✅ import đúng

// Kiểu dữ liệu
type Product = {
  product_id: string;
  name: string;
  price: number;
  stock: number;
};

type CartItem = {
  qty: number;
};

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // ✅ Load sản phẩm
  async function load() {
    const db = await dbPromise;
    const rows = (await db.getAllAsync("SELECT * FROM products")) as Product[];
    setProducts(rows);
  }

  useEffect(() => {
    load();
  }, []);

  // ✅ Thêm vào giỏ
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
      Alert.alert("Thông báo", "Vượt quá tồn kho!");
      return;
    }

    if (exist) {
      await db.runAsync("UPDATE cart_items SET qty=? WHERE product_id=?", [
        qty,
        product_id,
      ]);
    } else {
      await db.runAsync("INSERT INTO cart_items(product_id, qty) VALUES(?,?)", [
        product_id,
        1,
      ]);
    }

    Alert.alert("Thông báo", "Đã thêm vào giỏ!");
  }

  // ✅ Giao diện
  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: "#fff" }}>
      <FlatList
        data={products}
        keyExtractor={(i) => i.product_id}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#eee",
              paddingVertical: 8,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: "#555", marginVertical: 4 }}>
              {item.price.toLocaleString()}₫ - Tồn: {item.stock}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#007bff",
                padding: 8,
                borderRadius: 6,
                marginTop: 6,
              }}
              onPress={() => addToCart(item.product_id)}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Thêm vào giỏ
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push("/cart")}
        style={{
          backgroundColor: "#28a745",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          Xem giỏ hàng
        </Text>
      </TouchableOpacity>
    </View>
  );
}
