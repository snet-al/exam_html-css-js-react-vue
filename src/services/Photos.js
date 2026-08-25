import { HttpClient } from "./HttpClient";

export class Photos {
    static async getPhotos(id) {
        const data = await HttpClient.get(`/id/${id}/info`);
        return data;
    }

    // currently no need for other photos
}