"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai24 = void 0;
const bai24 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    });
    const data = await res.json();
    console.log("Posted:", data);
    return data;
};
exports.bai24 = bai24;
