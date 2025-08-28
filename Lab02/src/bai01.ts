export const HelloAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    success ? resolve("Hello Async") : reject("Fail");
  }, 2000);
});
