export default async function getAPI() {
    try {
        const response = await fetch("https://picsum.photos/v2/list");
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}