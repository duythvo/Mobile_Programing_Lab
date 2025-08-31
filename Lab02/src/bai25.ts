export const bai25 = async (filename: string) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Downloaded ${filename}`);
      resolve();
    }, 3000);
  });
};
