"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai29 = void 0;
const bai29 = async () => {
    const tasks = Array.from({ length: 5 }, (_, i) => () => new Promise((resolve) => setTimeout(() => resolve(`Task ${i + 1} done`), 1000 * (i + 1))));
    for (const task of tasks) {
        const result = await task();
        console.log("Queue result:", result);
    }
};
exports.bai29 = bai29;
