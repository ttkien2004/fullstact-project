const mongoose = require("mongoose");

const schema = mongoose.Schema;

const conversationSchema = new schema(
	{
		participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("conversation", conversationSchema);
