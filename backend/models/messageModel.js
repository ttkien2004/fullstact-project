const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageSchema = new schema(
	{
		conversationID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "conversations",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
