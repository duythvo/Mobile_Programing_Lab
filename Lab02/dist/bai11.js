"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloAsync2 = void 0;
// HelloAsync.ts
const HelloAsync2 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const success = true;
    if (success) {
        return "Hello Async";
    }
    else {
        throw new Error("Fail");
    }
};
exports.HelloAsync2 = HelloAsync2;
