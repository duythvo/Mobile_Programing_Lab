export const bai23 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: { id: number; title: string; completed: boolean }[] = await res.json();
  return todos.filter((t) => t.completed);
};
