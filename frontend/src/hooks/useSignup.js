import { useState } from "react";
import authAPI from "../services/auth";
import useAuthContext from "./useAuthContext";

const useSignup = () => {
	const [error, setError] = useState("");
	const { dispatch } = useAuthContext();
	const signup = async (email, password) => {
		try {
			const response = await authAPI.signup(email, password);

			localStorage.setItem("user", JSON.stringify({ ...response }));
			dispatch({ type: "LOGIN", payload: response });
		} catch (err) {
			console.log(err.error);
			setError(err.error);
		}
	};
	return { signup, error, setError };
};

export default useSignup;
