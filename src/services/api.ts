import axios, { AxiosInstance } from "axios";


// axios instance
const api: AxiosInstance = axios.create({
  baseURL: "https://api.revampinsights.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);






export default api;
