import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WorkoutContextProvider from "./context/WorkoutContext";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
