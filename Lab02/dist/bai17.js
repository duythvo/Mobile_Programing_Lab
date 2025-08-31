"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
const Bai17 = async () => {
    const promises = [1, 2, 3].map((n) => (0, bai14_1.Bai14)(n));
    for await (const result of promises) {
        console.log("for-await result:", result);
    }
};
Bai17();
