
const API_BASE_URL = 'https://picsum.photos';

export const photoService = {
    
    fetchPhotos: async (page = 1, limit = 30) => {
        try {
            const response = await fetch(`${API_BASE_URL}/v2/list?page=${page}&limit=${limit}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    },

    getPhotoById: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/id/${id}/info`);
            if (!response.ok) {
                throw new Error('Failed to fetch photo details');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching photo details:', error);
            throw error;
        }
    },

    getPhotoUrl: (id, width = 800, height = 600) => {
        return `${API_BASE_URL}/id/${id}/${width}/${height}`;
    },

    getRandomPhotoUrl: (width = 800, height = 600) => {
        return `${API_BASE_URL}/${width}/${height}`;
    }
};

export default photoService;
