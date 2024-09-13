import React from "react";
import { authContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = React.useContext(authContext);

  if (!context) {
    throw Error("useAuthContext must be used in AuthContextProvider");
  }
  return context;
};
