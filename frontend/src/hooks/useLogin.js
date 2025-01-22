import { useState } from "react";
import authAPI from "../services/auth";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
	const [error, setError] = useState("");
	const { dispatch } = useAuthContext();
	const login = async (email, password) => {
		try {
			const response = await authAPI.login(email, password);
			console.log(response);
			localStorage.setItem("user", JSON.stringify({ ...response }));
			dispatch({ type: "LOGIN", payload: response });
		} catch (err) {
			console.log(err.error);
			setError(err.error);
		}
	};
	return { login, error, setError };
};

export default useLogin;
