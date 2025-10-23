import * as SQLite from "expo-sqlite";
import { Product } from "../models/types";


const dbPromise = SQLite.openDatabaseAsync("shopping.db");

export async function execSql(sql: string, params: any[] = []): Promise<void> {
  const db = await dbPromise;
  await db.runAsync(sql, params);
}

export async function initDb() {
  const db = await dbPromise;

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name TEXT,
      price REAL,
      stock INTEGER
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS cart_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT,
      qty INTEGER,
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);


  const res = (await db.getFirstAsync("SELECT COUNT(*) AS c FROM products")) as
    | { c: number }
    | undefined;

  if (!res || res.c === 0) {
    const sample: Product[] = [
      { product_id: "p1", name: "Áo T-shirt", price: 199000, stock: 10 },
      { product_id: "p2", name: "Quần Jeans", price: 499000, stock: 5 },
      { product_id: "p3", name: "Giày thể thao", price: 899000, stock: 3 },
    ];

    for (const p of sample) {
      await db.runAsync(
        "INSERT INTO products(product_id, name, price, stock) VALUES(?,?,?,?)",
        [p.product_id, p.name, p.price, p.stock]
      );
    }
  }
}

export default dbPromise;
