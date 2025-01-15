import axiosClient from "../axios/axiosConfig";

const blogAPI = {
  getAll: async () => {
    try {
      const response = await axiosClient.get("/blog/getAll");
      return {
        data: response,
      };
    } catch (err) {
      throw err;
    }
  },
  createBlog: async (author, contents) => {
    try {
      const response = await axiosClient.post("/blog/createBlog", {
        author,
        contents,
      });
      return {
        data: response.data,
      };
    } catch (err) {
      console.log(err.response.data);
      throw err.response.data;
    }
  },
  deleteBlog: async (content_id) => {
    try {
      const response = await axiosClient.delete("/blog/deleteBlog", {
        params: {
          _id: content_id,
        },
      });
      return {
        data: response,
      };
    } catch (err) {
      throw err;
    }
  },
};

export default blogAPI;
