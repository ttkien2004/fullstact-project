import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// axiosClient.interceptors.request.use(
//     (config) => {
//         const token = loca
//     }
// )

export default axiosClient;
