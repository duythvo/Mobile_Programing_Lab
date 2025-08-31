export const bai27 = async (url: string, retries: number): Promise<any> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      return await res.json();
    } catch (err) {
      console.warn(`Attempt ${attempt} failed:`, err);
      if (attempt === retries) throw new Error("All retries failed");
    }
  }
};
