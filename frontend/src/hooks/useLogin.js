import authAPI from "../services/user";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    try {
      const response = await authAPI.login(username, password);
      if (response) {
        console.log(response.data.data);
        localStorage.setItem("user", JSON.stringify({ ...response.data.data }));
        dispatch({ type: "LOGIN", payload: response.data.data });
      }
    } catch (err) {
      // console.log(err.error);
      setError(err.error);
    }
  };
  return {
    login,
    error,
    setError,
  };
};

export default useLogin;
