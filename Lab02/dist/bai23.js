"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai23 = void 0;
const bai23 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return todos.filter((t) => t.completed);
};
exports.bai23 = bai23;
