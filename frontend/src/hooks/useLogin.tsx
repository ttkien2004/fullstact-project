import React from "react";
import { useAuthContext } from "./useAuthContext";
import authApi from "../services/authAPI";
import { authUser } from "../types/authType";

const useLogin = () => {
  const [error, setError] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login(email, password);
      if (response) {
        // Save the user in localStorage:
        localStorage.setItem("user", JSON.stringify(response.data));
        // Update the auth context
        dispatch({ type: "LOGIN", payload: response.data as authUser });

        console.log("Signup success");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Can not sign up");
      setIsLoading(false);
      console.log(err);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
