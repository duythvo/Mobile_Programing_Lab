"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = void 0;
const simulateTask = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            success ? resolve("Task done") : reject("Something went wrong");
        }, time);
    });
};
exports.simulateTask = simulateTask;
