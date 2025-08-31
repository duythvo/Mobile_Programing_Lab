"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai30 = void 0;
const bai30 = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://invalid.url", // simulate failure
    ];
    const results = await Promise.allSettled(urls.map((u) => fetch(u).then((res) => res.json())));
    results.forEach((res, i) => {
        if (res.status === "fulfilled") {
            console.log(`API ${i + 1} success:`, res.value);
        }
        else {
            console.error(`API ${i + 1} failed:`, res.reason);
        }
    });
};
exports.bai30 = bai30;
