import axiosClient from "../axios/axiosConfig";

const authAPI = {
  login: async (username, password) => {
    try {
      const response = await axiosClient.post("/auth/login", {
        username,
        password,
      });
      return {
        data: response.data,
      };
    } catch (err) {
      throw err.response.data;
    }
  },
  signup: async (username, password) => {
    try {
      const response = await axiosClient.post("/auth/signup", {
        username,
        password,
      });
      return {
        data: response.data,
      };
    } catch (err) {
      console.log(err.response.data);
      throw err.response.data;
    }
  },
};

export default authAPI;
