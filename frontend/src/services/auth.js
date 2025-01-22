import axiosClient from "../axios/axiosConfig";

const authAPI = {
	login: async (email, password) => {
		try {
			const response = await axiosClient.post("/auth/login", {
				email,
				password,
			});
			return response.data;
		} catch (err) {
			return err.response.data;
		}
	},
	signup: async (email, password) => {
		try {
			const response = await axiosClient.post("/auth/signup", {
				email,
				password,
			});
			return response.data;
		} catch (err) {
			return err.response.data;
		}
	},
};
export default authAPI;
