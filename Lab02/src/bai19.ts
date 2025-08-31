import { fetchUser } from "./bai18";

async function fetchUsers(ids: number[]) {
  return Promise.all(ids.map((id) => fetchUser(id)));
}

(async () => {
  console.log("Fetching user");
  const user = await fetchUsers([1, 2, 3]);
  console.log("Result:", user);
})();
