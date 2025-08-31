"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
async function Bai15() {
    const a = await (0, bai14_1.Bai14)(2);
    console.log("result 1:", a);
    const b = await (0, bai14_1.Bai14)(3);
    console.log("result 2:", b);
    const c = await (0, bai14_1.Bai14)(4);
    console.log("result 3:", c);
}
Bai15();
