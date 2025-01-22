import { createContext, useReducer, useEffect } from "react";

export const authContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload };
		case "LOGOUT":
			return { user: null };
		default:
			return state;
	}
};

const AuthContextProvider = ({ children }) => {
	const [auth, dispatch] = useReducer(authReducer, { user: null });

	const user = localStorage.getItem("user");
	useEffect(() => {
		if (user) {
			dispatch({ type: "LOGIN", payload: JSON.parse(user) });
		}
	}, []);
	return (
		<authContext.Provider value={{ ...auth, dispatch }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthContextProvider;
