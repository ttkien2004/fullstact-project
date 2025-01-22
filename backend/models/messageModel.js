const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageSchema = new schema(
	{
		conversationID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
