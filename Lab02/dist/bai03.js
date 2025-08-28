"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorPromise = void 0;
exports.ErrorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        success ? resolve("Hello Async") : reject("Something went wrong");
    }, 1000);
});
