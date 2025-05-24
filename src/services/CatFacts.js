import { HttpClient } from "../HttpClient";

const API_URL = "https://catfact.ninja";

export class CatFacts {

    static async getFact() {
        const catObj = await HttpClient.get(`${API_URL}/fact`);
        return catObj.fact;
    }

    static async getBreeds(limit) {
        return await HttpClient.get(`${API_URL}/breeds`, { limit });
    }

    static async getFacts(limit) {
        return await HttpClient.get(`${API_URL}/facts`, { limit });
    }
}