import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import { ToastContainer } from "react-toastify";
import TodoContextProvider from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoContextProvider>
      <PrimeReactProvider>
        <App />
        <ToastContainer />
      </PrimeReactProvider>
    </TodoContextProvider>
  </React.StrictMode>
);
