"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bai20 = void 0;
const bai18_1 = require("./bai18");
const Bai20 = async (id) => {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), 2000));
    return Promise.race([(0, bai18_1.fetchUser)(id), timeout]);
};
exports.Bai20 = Bai20;
