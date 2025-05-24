import axios from 'axios'

const AXIOS_TIMEOUT_DURATION = 50000;

const instance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  timeout: AXIOS_TIMEOUT_DURATION,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export class HttpClient {
  static instance = instance;
  static async get(url, params) {
    const response = await this.instance.get(url, { params });
    return response.data;
  }

  static async post(url, data, options) {
    const response = await this.instance.post(url, data, options);
    return response.data;
  }

  static async put(url, data) {
    const response = await this.instance.put(url, data);
    return response.data;
  }

  static async patch(url, data) {
    const response = await this.instance.patch(url, data);
    return response.data;
  }

  static async delete(url, config) {
    const response = await this.instance.delete(url, config);
    return response.data;
  }
}