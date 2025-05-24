import { HttpClient } from "../HttpClient";

const API_URL = "https://picsum.photos";

export class PicsumPhotos {
    
    static async getPhotos(page, limit) {
        return await HttpClient.get(`${API_URL}/v2/list`, { page, limit });
    }

    static async getRandomPhoto(width, height) {
        return await HttpClient.get(`${API_URL}/${width}/${height}`, {});
    }

    static async getPhotoById(id, width=200, height=300) {
        return await HttpClient.get(`${API_URL}/id/${id}/${width}/${height}`, {});
    }
}