import { fetchUser } from "./bai18";

export const Bai20 = async (
  id: number
): Promise<{ id: number; name: string }> => {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), 2000)
  );

  return Promise.race([fetchUser(id), timeout]);
};
