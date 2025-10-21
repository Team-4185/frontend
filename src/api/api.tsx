import axios, { type AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL:'/api',
    // import.meta.env.DEV
    //   ? '/api' // use proxy in development
    //   : 'https://phone-shop-production.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
