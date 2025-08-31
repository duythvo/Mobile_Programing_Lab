"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai22 = void 0;
const bai22 = async () => {
    for (let i = 1; i <= 3; i++) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        const data = await res.json();
        console.log(`Todo ${i}:`, data);
    }
};
exports.bai22 = bai22;
