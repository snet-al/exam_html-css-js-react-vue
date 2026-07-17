export class PhotoService {
  async fetchPhotos() {
    const page = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(this.getPhotoUrl(page));

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  getPhotoUrl(page) {
    return `https://picsum.photos/v2/list?page=${page}&limit=4`;
  }
}

const photoService = new PhotoService();

export default photoService;


