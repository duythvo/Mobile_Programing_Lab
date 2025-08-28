export const filterEvens = (arr: number[]): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !Array.isArray(arr)
        ? reject(new Error("Input is not a array"))
        : resolve(arr.filter((a) => a % 2 === 0));
    }, 1000);
  });
};
