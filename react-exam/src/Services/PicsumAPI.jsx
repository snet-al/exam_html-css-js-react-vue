export class PicsumAPI {
  constructor(limit = 100, pages = 10) {
    this.limit = limit;
    this.pages = pages;
    this.baseUrl = 'https://picsum.photos/v2/list';
  }

  async fetchAllPhotos() {
    try {
      const fetchPromises = [];

      for (let page = 1; page <= this.pages; page++) {
        const promise = fetch(`${this.baseUrl}?page=${page}&limit=${this.limit}`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed on page ${page}`);
            return response.json();
          });
        fetchPromises.push(promise);
      }

      const pagesData = await Promise.all(fetchPromises);
      return pagesData.flat();
    } catch (err) {
      console.error("Error fetching all photos:", err);
      return [];
    }
  }
}
