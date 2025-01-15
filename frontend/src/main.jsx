import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
