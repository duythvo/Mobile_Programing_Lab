import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("shopping.db");

export default function InvoiceScreen() {
  const [items, setItems] = useState<any[]>([]);

  async function load() {
    const rows = await db.getAllAsync(`
      SELECT c.*, p.name, p.price
      FROM cart_items c JOIN products p ON p.product_id=c.product_id`);
    setItems(rows);
  }

  useEffect(() => {
    load();
  }, []);

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  async function checkout() {
    await db.runAsync("DELETE FROM cart_items");
    alert("Thanh toán thành công!");
  }

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hoá đơn</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <Text>
            {item.name} - {item.qty} x {item.price}₫ = {item.qty * item.price}₫
          </Text>
        )}
      />
      <Text style={{ marginTop: 12 }}>Tạm tính: {subtotal}₫</Text>
      <Text>VAT (10%): {vat}₫</Text>
      <Text style={{ fontWeight: "bold" }}>Tổng: {total}₫</Text>
      <TouchableOpacity
        onPress={checkout}
        style={{
          backgroundColor: "#28a745",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}
