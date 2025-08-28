"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomPromise = void 0;
exports.RandomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * 10);
        random ? resolve(random) : reject("Something went wrong");
    }, 1000);
});
