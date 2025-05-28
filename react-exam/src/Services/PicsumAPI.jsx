export class PicsumAPI {
    constructor(limit = 50) {
        this.limit = limit
        this.baseUrl = 'https://picsum.photos/v2/list'
    }

    getRandomPage(){
        return Math.floor(Math.random() * 10) + 1;
    }//random page from 1-10

    async fetchPagePhotos() {
        const page = this.getRandomPage()
        try {
            const response = await fetch(`${this.baseUrl}?page=${page}&limit=${this.limit}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    }
}
