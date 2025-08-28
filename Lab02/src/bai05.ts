export const simulateTask = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Task done") : reject("Something went wrong");
    }, time);
  });
};
