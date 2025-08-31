export const bai29 = async () => {
  const tasks = Array.from(
    { length: 5 },
    (_, i) => () =>
      new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Task ${i + 1} done`), 1000 * (i + 1))
      )
  );

  for (const task of tasks) {
    const result = await task();
    console.log("Queue result:", result);
  }
};
