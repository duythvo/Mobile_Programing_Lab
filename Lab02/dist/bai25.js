"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai25 = void 0;
const bai25 = async (filename) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Downloaded ${filename}`);
            resolve();
        }, 3000);
    });
};
exports.bai25 = bai25;
