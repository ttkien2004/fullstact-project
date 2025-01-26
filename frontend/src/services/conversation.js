import axiosClient from "../axios/axiosConfig";

const conversationApi = {
	getConverseList: async () => {
		try {
			const response = await axiosClient.get("/converse/getConverses");

			return {
				data: response.data,
			};
		} catch (err) {
			throw err.response.data;
		}
	},
};

export default conversationApi;
