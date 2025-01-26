import axiosClient from "../axios/axiosConfig";

const messageAPI = {
	getMessages: async (receiverId) => {
		try {
			const response = await axiosClient.get(`/mess/getMessages/${receiverId}`);

			return {
				data: response.data,
			};
		} catch (err) {
			throw err.response.data;
		}
	},
	createMessage: async (receiverId, content) => {
		try {
			const response = await axiosClient.post(
				`/mess/createMessage/${receiverId}`,
				{
					content,
				}
			);
			return {
				data: response.data,
			};
		} catch (err) {
			throw err.response.data;
		}
	},
};

export default messageAPI;
