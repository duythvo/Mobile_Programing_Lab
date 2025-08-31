"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bai14 = void 0;
const Bai14 = async (num) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * 3), 1000);
    });
};
exports.Bai14 = Bai14;
