export const photoServices = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching items:", error);
      return [];
    }
  };