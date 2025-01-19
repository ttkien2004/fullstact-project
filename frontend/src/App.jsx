import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import DefaultLayout from "./components/DefaultLayout";
import ChatDashboard from "./pages/ChatDashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Wrap routes with DefaultLayout */}
				<Route path="/" element={<DefaultLayout />}>
					{/* Nested routes rendered via Outlet */}
					<Route path="chat" element={<ChatDashboard />}></Route>
					<Route path="login" element={<LoginForm />} />
					<Route path="signup" element={<SignupForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
