import { useAuthContext } from "./useAuthContext";
import authAPI from "../services/user";
import { useState } from "react";

const useSignup = () => {
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();
  const signup = async (username, password) => {
    try {
      const response = await authAPI.signup(username, password);
      if (response) {
        localStorage.setItem("user", JSON.stringify({ ...response.data.data }));
        dispatch({ type: "LOGIN", payload: response.data.data });
      }
    } catch (err) {
      setError(err.error);
    }
  };
  return {
    signup,
    error,
    setError,
  };
};

export default useSignup;
