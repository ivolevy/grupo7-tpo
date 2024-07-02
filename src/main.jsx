import React from "react";
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./authContext";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
