export const RandomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 10);
    random ? resolve(random) : reject("Something went wrong");
  }, 1000);
});
