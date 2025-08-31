import { Bai14 } from "./bai14";

async function Bai15() {
  const a = await Bai14(2);
  console.log("result 1:", a);

  const b = await Bai14(3);
  console.log("result 2:", b);

  const c = await Bai14(4);
  console.log("result 3:", c);
}

Bai15()

