import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

import "./style.css";
import conversationApi from "../services/conversation";
import messageAPI from "../services/message";
import useAuthContext from "../hooks/useAuthContext";

const ChatDashboard = ({ socket }) => {
	const [userList, setUserList] = useState([]);
	const [chatInitiated, setChatInitiated] = useState(false);
	const [receiverId, setReceiverId] = useState("");
	const [content, setContent] = useState("");
	const [chats, setChats] = useState([]);
	const { user } = useAuthContext();

	const startChat = async (id) => {
		console.log(id);
		try {
			const response = await messageAPI.getMessages(id);

			console.log(chats);
			setChats(response.data.data);
		} catch (err) {
			if (err.error === "Not found") {
				setChats([]);
			}
			console.log(err);
		}
		socket.emit("join", id);
		setChatInitiated(true);
	};
	const handleCreateMessage = async () => {
		try {
			const response = await messageAPI.createMessage(receiverId, content);
			if (response) {
				// console.log(response.data.data);
				setChats([...chats, response.data.data]);
			}
		} catch (err) {
			console.log(err.error);
		}
	};
	const icons = [
		{
			name: "pi pi-home",
		},
		{
			name: "pi pi-comment",
		},
		{
			name: "pi pi-star",
		},
		{
			name: "pi pi-objects-column",
		},
		{
			name: "pi pi-chart-bar",
		},
		{
			name: "pi pi-cog",
		},
	];

	useEffect(() => {
		conversationApi
			.getConverseList()
			.then((res) => {
				// console.log(res.data.data);
				setUserList(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
		setChats([]);
	}, []);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexGrow: 1,
				paddingTop: "100px",
				paddingBottom: "100px",
			}}
		>
			<div
				style={{
					width: "1200px",
					height: "600px",
					display: "flex",
					flexDirection: "row",
					border: "1px solid black",
					borderRadius: "15px",
					boxShadow: "0px 4px 8px 4px rgba(0,0,0,0.05)",
				}}
			>
				{/* mini sidebar */}
				<div
					style={{
						marginLeft: "40px",
						marginTop: "10px",
						marginBottom: "10px",
						borderRadius: "20px",
						width: "80px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "#213555",
					}}
				>
					{icons.map((icon, index) => (
						<div
							key={index}
							style={{
								width: "35px",
								height: "30px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "10px",
								marginTop: "15px",
								marginBottom: "15px",
							}}
							className="mini-icon"
						>
							<i className={icon.name} style={{ fontSize: "20px" }}></i>
						</div>
					))}
				</div>
				{/* mini search user list */}
				<div
					style={{
						paddingTop: "10px",
						width: "350px !important",
						paddingLeft: "10px",
						paddingRight: "10px",
						marginLeft: "20px",
					}}
				>
					<IconField iconPosition="left" style={{ marginBottom: "50px" }}>
						<InputIcon className="pi pi-search"></InputIcon>
						<InputText
							placeholder="Search"
							style={{ width: "100%" }}
						></InputText>
					</IconField>
					{/* user lists */}
					{userList.map((userr, index) => (
						<div
							key={index}
							style={{
								display: "flex",
								borderRadius: "10px",
								marginTop: "20px",
								marginBottom: "20px",
								alignItems: "center",
								boxShadow: "0 4px 8px 4px rgba(0,0,0,0.1)",
							}}
							className="user-container-hover"
							onClick={() => {
								setChats([]);
								setReceiverId(userr._id);
								startChat(userr._id);
							}}
						>
							{/* avatar */}
							<div
								style={{
									border: "1px solid black",
									width: "50px",
									height: "50px",
									borderRadius: "25px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginLeft: "10px",
									marginRight: "10px",
								}}
							>
								<i className="pi pi-user" style={{ fontSize: "20px" }}></i>
							</div>
							{/* name, message, date */}
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									paddingTop: "15px",
									flexGrow: 1,
									paddingLeft: "10px",
									cursor: "pointer",
								}}
							>
								<div>
									{userr.email.split("@")[0]}{" "}
									<span
										style={{
											fontSize: "10px",
											marginLeft: "10px",
											color: "rgb(180,180,180)",
										}}
									>
										{"12-12-2012"}
									</span>
								</div>
								<p
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										width: "100px",
										fontSize: "12px",
										color: "rgb(187, 187, 187)",
									}}
								>
									{"Hello"}
								</p>
							</div>
						</div>
					))}
				</div>
				{/* Chat app */}
				<div
					style={{
						flexGrow: 1,
						paddingTop: "10px",
						paddingBottom: "10px",
						display: "flex",
						flexDirection: "column",
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				>
					{/* username, some icons on the right hand side */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<i
							className="pi pi-user"
							style={{
								border: "1px solid black",
								height: "40px",
								width: "40px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "20px",
								borderRadius: "30px",
								marginRight: "20px",
							}}
						></i>
						<div
							style={{
								fontSize: "20px",
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								paddingRight: "15px",
								alignItems: "center",
							}}
						>
							<div>Kien Tran</div>
							<div
								style={{
									color: "rgb(180,180,180)",
									fontSize: "10px",
								}}
							>
								<i
									className="pi pi-search"
									style={{ marginLeft: "10px", marginRight: "10px" }}
								></i>
								<i className="pi pi-equals"></i>
							</div>
						</div>
					</div>
					{/* place to chat */}
					<div
						style={{
							backgroundColor: "#F8FAFC",
							flexGrow: 1,
							borderRadius: "10px",
							marginTop: "10px",
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						{/* Place to render the message */}
						<div
							style={{
								height: "450px",
								overflowY: "auto",
							}}
						>
							{chats.map((chat, index) =>
								chat.sender === user.userId ? (
									<div className="sender-message-container" key={index}>
										<p className="render-message-content">{chat.content}</p>
									</div>
								) : (
									<div className="receiver-message-container" key={index}>
										<i className="pi pi-user receiver-icon"></i>
										<p className="render-message-content">{chat.content}</p>
									</div>
								)
							)}
							{/* receiver */}
							{/* sender - user */}
						</div>
						{/* Place to type message */}
						<div
							style={{
								display: "flex",
								marginBottom: "15px",
								marginTop: "10px",
							}}
						>
							<InputText
								placeholder="Message..."
								style={{ width: "100%", marginRight: "10px" }}
								value={content}
								onChange={(e) => setContent(e.target.value)}
							></InputText>
							<Button
								icon="pi pi-arrow-up"
								severity="secondary"
								onClick={() => {
									handleCreateMessage(receiverId, content);
									setContent("");
								}}
							></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatDashboard;
