// HelloAsync.ts
export const HelloAsync2 = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const success = true;
  if (success) {
    return "Hello Async";
  } else {
    throw new Error("Fail");
  }
};
