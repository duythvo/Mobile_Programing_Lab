"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bai10 = void 0;
const Bai10 = (status) => new Promise((resolve, reject) => {
    setTimeout(() => {
        status ? resolve("Task success!") : reject("error");
    }, 1000);
});
exports.Bai10 = Bai10;
