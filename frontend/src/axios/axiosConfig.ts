import axios from "axios";
import environment from "../environment";

const axiosClient = axios.create({
  baseURL: environment.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");

    if (token) {
      const tokenString = JSON.parse(token);
      config.headers.Authorization = `Bearer ${tokenString.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
