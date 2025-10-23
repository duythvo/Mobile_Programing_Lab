import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";
import { useRouter } from "expo-router";

const db = SQLite.openDatabaseSync("shopping.db");

export default function CartScreen() {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  async function load() {
    const rows = await db.getAllAsync(`
      SELECT c.*, p.name, p.price, p.stock 
      FROM cart_items c JOIN products p ON p.product_id=c.product_id`);
    setItems(rows);
  }

  useEffect(() => {
    load();
  }, []);

  async function updateQty(pid: string, newQty: number) {
    if (newQty <= 0) await db.runAsync("DELETE FROM cart_items WHERE product_id=?", [pid]);
    else await db.runAsync("UPDATE cart_items SET qty=? WHERE product_id=?", [newQty, pid]);
    load();
  }

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderColor: "#eee", padding: 8 }}>
            <Text>{item.name}</Text>
            <Text>{item.qty} x {item.price}₫ = {item.qty * item.price}₫</Text>
            <View style={{ flexDirection: "row", marginTop: 6 }}>
              <TouchableOpacity onPress={() => updateQty(item.product_id, item.qty - 1)}>
                <Text style={{ margin: 4 }}>➖</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateQty(item.product_id, item.qty + 1)}>
                <Text style={{ margin: 4 }}>➕</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateQty(item.product_id, 0)}>
                <Text style={{ color: "red", margin: 4 }}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={{ marginTop: 8, fontWeight: "bold" }}>
        Tạm tính: {subtotal}₫
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/invoice")}
        style={{
          backgroundColor: "#007bff",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Xem hoá đơn</Text>
      </TouchableOpacity>
    </View>
  );
}
