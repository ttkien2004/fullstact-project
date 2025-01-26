const messageModel = require("../models/messageModel");
const conversationModel = require("../models/conversationModel");

const getMessages = async (req, res) => {
	const { receiverId } = req.params;
	const user_id = req.user._id;
	console.log(receiverId);
	try {
		const conversation = await conversationModel.findOne({
			participants: { $all: [user_id, receiverId] },
		});

		if (!conversation) {
			res.status(404).json({ error: "Not found" });
		}

		const messages = await messageModel
			.find({
				conversationID: conversation._id,
			})
			.sort({ createdAt: 1 });

		res.status(200).json({ data: messages });
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
};

const createMessage = async (req, res) => {
	try {
		const { receiverId } = req.params;
		console.log(req.user);
		const senderId = req.user._id;
		const { content } = req.body;

		let conversation = await conversationModel.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await conversationModel.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = await messageModel.create({
			conversationID: conversation._id,
			sender: senderId,
			content: content,
		});

		return res.status(200).json({ data: newMessage });
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
};

module.exports = { createMessage, getMessages };
