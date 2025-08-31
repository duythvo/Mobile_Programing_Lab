"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = void 0;
const fetchUser = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
};
exports.fetchUser = fetchUser;
(async () => {
    console.log("Fetching user");
    const user = await (0, exports.fetchUser)(1);
    console.log("Result:", user);
})();
