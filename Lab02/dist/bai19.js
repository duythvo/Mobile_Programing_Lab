"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    return Promise.all(ids.map((id) => (0, bai18_1.fetchUser)(id)));
}
(async () => {
    console.log("Fetching user");
    const user = await fetchUsers([1, 2, 3]);
    console.log("Result:", user);
})();
