import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Views */
import { Home } from "./Home";
/* Product views */
import { Products } from "./Products";
import { Product } from './Product';
/* Log views */
import { Login } from "./Login";
import { Register } from "./Register";
/* Buy views */
import { Cart } from "./Cart";
import "./assets/css/Main.css";
import { Contact } from "./Contact";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
