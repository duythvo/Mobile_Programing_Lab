"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai28 = void 0;
const bai28 = async () => {
    const tasks = Array.from({ length: 5 }, (_, i) => new Promise((resolve) => setTimeout(() => resolve(`Task ${i + 1} done`), 1000 * (i + 1))));
    const results = await Promise.all(tasks);
    console.log("Batch results:", results);
};
exports.bai28 = bai28;
