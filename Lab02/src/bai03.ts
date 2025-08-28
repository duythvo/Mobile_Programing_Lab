export const ErrorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    success ? resolve("Hello Async") : reject("Something went wrong");
  }, 1000);
});