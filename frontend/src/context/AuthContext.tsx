import React, { createContext, ReducerAction } from "react";
import { authUser, authAction } from "../types/authType";

interface Props {
  children: React.ReactNode;
}
const initialAuth: authUser = {
  email: "",
  token: "",
};
export const authContext = createContext<{
  auth: authUser;
  dispatch: React.Dispatch<authAction>;
} | null>(null);

export const authReducer = (state: authUser, action: authAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialAuth;
    default:
      return state;
  }
};
const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [auth, dispatch] = React.useReducer(authReducer, initialAuth);

  // console.log("Auth state: ", auth);
  return (
    <authContext.Provider value={{ auth, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
