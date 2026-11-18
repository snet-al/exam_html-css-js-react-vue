const BASE_URL = 'https://picsum.photos/v2/list';

export async function fetchPhotosFromApi(page = 1, limit = 4) {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos from API');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in photoService:', error);
    throw error;
  }
}
