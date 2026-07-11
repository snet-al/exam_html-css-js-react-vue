const PHOTO_API_URL = 'https://picsum.photos/v2/list?page=1&limit=4';

export async function fetchPhotos() {
  try {
    const response = await fetch(PHOTO_API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}
