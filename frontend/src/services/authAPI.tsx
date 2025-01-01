import { authType } from "../types/authType";
import axios from "axios";

interface ApiResponse<T> {
  message?: string;
  status?: string;
  data?: T;
}

const authApi = {
  login: async (
    email: string,
    password: string
  ): Promise<ApiResponse<authType>> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      return {
        data: response.data,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  signup: async (
    email: string,
    password: string
  ): Promise<ApiResponse<authType>> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        {
          email: email,
          password: password,
        }
      );
      return {
        data: response.data,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default authApi;
