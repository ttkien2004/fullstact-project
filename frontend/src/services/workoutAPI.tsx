import { workoutType } from "../types/workoutType";
import axios from "axios";
import axiosClient from "../axios/axiosConfig";

export interface ApiResponse<T> {
  status?: number;
  message?: string;
  data?: T;
}

const workoutAPI = {
  getAll: async (): Promise<ApiResponse<workoutType[]>> => {
    try {
      const response = await axiosClient.get("/api/workouts");
      return {
        data: response.data,
      };
    } catch (err) {
      console.log("error");
      throw err;
    }
  },
  create: async (data: workoutType): Promise<ApiResponse<workoutType>> => {
    try {
      const response = await axiosClient.post("/api/workouts", {
        title: data.title,
        load: data.load,
        reps: data.reps,
      });
      return {
        data: response.data,
      };
    } catch (err) {
      throw err;
    }
  },
  delete: async (data: workoutType): Promise<ApiResponse<workoutType>> => {
    try {
      const response = await axiosClient.delete("/api/workouts/delete", {
        data: {
          title: data.title,
          load: data.load,
          reps: data.reps,
        },
      });
      return {
        data: response.data,
      };
    } catch (err) {
      console.log(err);
      throw Error("Can not delete");
    }
  },
};

export default workoutAPI;
