import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Product } from "./Product"; 
import { Login } from "./Login";
import { Register } from "./Register";
import { Cart } from "./Cart";
import { Contact } from "./Contact";
import productsData from "./data/productos.json";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product products={productsData} />} /> {/* Pasa la lista de productos como prop */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
