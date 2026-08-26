import { HttpClient } from "./HttpClient";

export class Photos {
    static async getPhotos(page = 1, limit = 4) {
        const data = await HttpClient.get(`/v2/list?page=${page}&limit=${limit}`);
        return data;
    }

    // currently no need for other photos 
}