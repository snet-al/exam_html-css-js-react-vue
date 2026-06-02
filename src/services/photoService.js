const API_URL = "https://picsum.photos/v2/list";

export async function fetchPhotosFromApi(page = 1, limit = 100) {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
