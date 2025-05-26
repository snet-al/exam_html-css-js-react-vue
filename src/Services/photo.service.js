
export class PhotoService {
  constructor(limit = 4) {
    this.limit = limit;
    this.baseUrl = 'https://picsum.photos/v2/list';
  }

  getRandomPage() {
    return Math.floor(Math.random() * 100);
  }

  async fetchPhotos() {
    const page = this.getRandomPage();
    const url = `${this.baseUrl}?page=${page}&limit=${this.limit}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      return data.map((img) => ({
        src: `https://picsum.photos/id/${img.id}/200/300?random=${Math.random()}`,
        link: img.url,
        author: img.author,
      }));
    } catch (err) {
      console.error("Failed to fetch photos:", err);
      throw err;
    }
  }
}
