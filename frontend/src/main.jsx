import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import AuthContextProvider from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<PrimeReactProvider>
				<App />
			</PrimeReactProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
