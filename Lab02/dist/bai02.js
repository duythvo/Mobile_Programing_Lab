"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print10 = void 0;
exports.Print10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
