"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
async function runAll() {
    const results = await Promise.all([
        (0, bai14_1.Bai14)(5),
        (0, bai14_1.Bai14)(6),
        (0, bai14_1.Bai14)(7),
    ]);
    console.log("results:", results);
}
runAll();
