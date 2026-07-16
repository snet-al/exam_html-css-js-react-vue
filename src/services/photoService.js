const API_URL = "https://picsum.photos/v2/list";

class PhotoService {
  static async get(page = 1, limit = 100) {
    try {
      const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in PhotoService:", error);
      return [];
    }
  }
}

export default PhotoService;