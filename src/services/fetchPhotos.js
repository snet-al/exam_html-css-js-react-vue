export const fetchPhotos = async (page, limit) => {
    const apiUrl = `https://picsum.photos/v2/list?limit=${limit}&page=${page}`;
  
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
  };
  