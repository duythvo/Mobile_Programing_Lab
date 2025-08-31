"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai21 = void 0;
const bai21 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("Todo:", data);
    return data;
};
exports.bai21 = bai21;
