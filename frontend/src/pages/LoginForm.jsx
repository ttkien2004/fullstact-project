import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
import useLogin from "../hooks/useLogin";
import { useState } from "react";
import "./style.css";

const LoginForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, setError } = useLogin();

	const handleLogin = async (e) => {
		e.preventDefault();

		await login(email, password);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexGrow: 1,
				alignItems: "center",
			}}
		>
			<form className="login-form" onSubmit={handleLogin}>
				<h1>Login</h1>
				{/* username input */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						marginTop: "20px",
					}}
				>
					<label htmlFor="username-input">Username</label>
					<InputText
						type="text"
						id="username-input"
						placeholder="username"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value), setError("");
						}}
					></InputText>
				</div>
				{/* password input */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						marginTop: "20px",
					}}
				>
					<label htmlFor="password-input">Password</label>
					<InputText
						id="password-input"
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value), setError("");
						}}
					></InputText>
				</div>
				{/* button to submit */}
				<Button label="Login" style={{ marginTop: "50px" }}></Button>
				<div style={{ display: "flex", fontSize: "13px", marginTop: "10px" }}>
					<div style={{ cursor: "pointer" }}>Forgot password?</div>
					<div
						style={{ marginLeft: "5px", cursor: "pointer" }}
						onClick={() => navigate("/signup")}
					>
						Don't have an account?
					</div>
				</div>
				{/* Render error */}
				<small style={{ color: "red", marginTop: "10px", fontSize: "20px" }}>
					{error}
				</small>
			</form>
		</div>
	);
};

export default LoginForm;
