const express = require("express");
const {
	createMessage,
	getMessages,
} = require("../controllers/messageController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();
router.use(requireAuth);

router.get("/getMessages/:receiverId", getMessages);
router.post("/createMessage/:receiverId", createMessage);
// router.delete("/deleteMessage");

module.exports = router;
