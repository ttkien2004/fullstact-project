import { useContext, useEffect } from "react";
import { authContext } from "../context/authContext";

const useAuthContext = () => {
	const context = useContext(authContext);

	if (!context) {
		throw Error("AuthContext must be used in AuthContextProvider");
	}
	return context;
};

export default useAuthContext;
