require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const authRoute = require("./routes/authRoute");
const messageRoute = require("./routes/messageRoute");
const converseRoute = require("./routes/conversationRoute");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

app.use("/api", authRoute);
app.use("/api/mess", messageRoute);
app.use("/api/converse", converseRoute);

const onlineUsers = {};
io.on("connection", (socket) => {
	socket.on("join", (receiverId) => {
		onlineUsers[receiverId] = socket.id;
		console.log("Receiver: ", receiverId, "Sender: ", socket.id);
	});
});
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connecting to MONGO_DB");
	})
	.catch((err) => {
		console.log(err.message);
	});

server.listen(process.env.PORT, () =>
	console.log(`Listening to ${process.env.PORT}`)
);
