import React from "react";
import { useAuthContext } from "./useAuthContext";
import authApi from "../services/authAPI";
import { authUser } from "../types/authType";

const useSignup = () => {
  const [error, setError] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    try {
      const response = await authApi.signup(email, password);
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

  return { signup, isLoading, error };
};

export default useSignup;
