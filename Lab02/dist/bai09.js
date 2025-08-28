"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEvens = void 0;
const filterEvens = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            !Array.isArray(arr)
                ? reject(new Error("Input is not a array"))
                : resolve(arr.filter((a) => a % 2 === 0));
        }, 1000);
    });
};
exports.filterEvens = filterEvens;
