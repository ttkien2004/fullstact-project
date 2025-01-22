import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import DefaultLayout from "./components/DefaultLayout";
import ChatDashboard from "./pages/ChatDashboard";
import useAuthContext from "./hooks/useAuthContext";

function App() {
	const { user } = useAuthContext();
	return (
		<BrowserRouter>
			<Routes>
				{/* Wrap routes with DefaultLayout */}
				<Route path="/" element={<DefaultLayout />}>
					{/* Nested routes rendered via Outlet */}
					<Route
						path="chat"
						element={user ? <ChatDashboard /> : <Navigate to={"/login"} />}
					></Route>
					<Route
						path="login"
						element={!user ? <LoginForm /> : <Navigate to={"/chat"} />}
					/>
					<Route
						path="signup"
						element={!user ? <SignupForm /> : <Navigate to={"/chat"} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
