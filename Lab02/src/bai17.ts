import { Bai14 } from "./bai14";

const Bai17 = async () => {
  const promises = [1, 2, 3].map((n) => Bai14(n));
  for await (const result of promises) {
    console.log("for-await result:", result);
  }
};

Bai17();
