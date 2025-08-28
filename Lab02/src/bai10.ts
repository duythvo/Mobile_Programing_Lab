export const Bai10 = (status: boolean): Promise<string> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      status ? resolve("Task success!") : reject("error");
    }, 1000);
  });
