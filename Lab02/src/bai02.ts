export const Print10 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});