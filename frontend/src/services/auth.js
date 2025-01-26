import axiosClient from "../axios/axiosConfig";

const authAPI = {
	login: async (email, password) => {
		try {
			const response = await axiosClient.post("/auth/login", {
				email,
				password,
			});
			return { data: response.data };
		} catch (err) {
			throw err.response.data;
		}
	},
	signup: async (email, password) => {
		try {
			const response = await axiosClient.post("/auth/signup", {
				email,
				password,
			});
			return { data: response.data };
		} catch (err) {
			throw err.response.data;
		}
	},
};
export default authAPI;
