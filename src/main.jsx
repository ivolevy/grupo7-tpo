import React from "react";
<<<<<<< Updated upstream
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";
import "./assets/css/Main.css";
import { AuthProvider } from "./authContext";
import { PaymentProvider } from "./PaymentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<PaymentProvider>
				<App />
			</PaymentProvider>
		</AuthProvider>
	</React.StrictMode>
=======
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./authContext";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
>>>>>>> Stashed changes
);
