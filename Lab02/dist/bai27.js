"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai27 = void 0;
const bai27 = async (url, retries) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error("Network error");
            return await res.json();
        }
        catch (err) {
            console.warn(`Attempt ${attempt} failed:`, err);
            if (attempt === retries)
                throw new Error("All retries failed");
        }
    }
};
exports.bai27 = bai27;
