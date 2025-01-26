const conversationSchema = require("../models/conversationModel");

const getConverse = async (req, res) => {
	const user_id = req.user._id;

	try {
		// Find all conversations where user is a participant
		const conversations = await conversationSchema
			.find({ participants: { $in: [user_id] } })
			.populate("participants", "email");

		// Extract all participants, excluding user
		// console.log(conversations.flatMap());
		const friends = conversations.flatMap((conversation) => {
			return conversation.participants.filter(
				(participant) => participant._id.toString() !== user_id.toString()
			);
			// return filtered;
		});
		// return unique friends (remove duplicates)
		const uniqueFriends = Array.from(
			new Set(friends.map((friend) => friend._id.toString()))
		).map((id) => friends.find((friend) => friend._id.toString() === id));

		res.status(200).json({ data: uniqueFriends });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = { getConverse };
