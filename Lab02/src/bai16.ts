import { Bai14 } from "./bai14";

async function runAll() {
  const results = await Promise.all([
    Bai14(5),
    Bai14(6),
    Bai14(7),
  ]);
  console.log("results:", results);
}

runAll()