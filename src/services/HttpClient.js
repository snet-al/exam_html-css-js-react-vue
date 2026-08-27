import axios from 'axios'

const AXIOS_TIMEOUT_DURATION = 50000;

// instance(url) instead of axois(url) will give the listed request properties
// define the function to later use is the class implementation
const instance = axios.create({
  baseURL: "https://picsum.photos",
  timeout: AXIOS_TIMEOUT_DURATION,
  headers: {
    'Content-Type': 'application/json',
  },
});

// everytime we request we run this function by default to check if the user is logged in (Will never be)
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } // must return config (request)
    return config
  },
  (error) => Promise.reject(error)
)

// also does nothing but we could use it in the future to log out if a token has expired for example
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

// define the Class to use its methods for any API requests in the app
export class HttpClient {
  static instance = instance; // the "fetch function"
  
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
