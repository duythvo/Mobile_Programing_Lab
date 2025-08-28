"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloAsync = void 0;
exports.HelloAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        success ? resolve("Hello Async") : reject("Fail");
    }, 2000);
});
