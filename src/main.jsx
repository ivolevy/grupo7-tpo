import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Login } from "./Login";
import { Register } from "./Register";
import { UserView } from "./UserView";
import "./assets/css/Main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserView />} />    
    </Routes>
  </BrowserRouter>
);
