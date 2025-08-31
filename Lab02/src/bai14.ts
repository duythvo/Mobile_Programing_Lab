export const Bai14 = async (num: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 3), 1000);
  });
};
