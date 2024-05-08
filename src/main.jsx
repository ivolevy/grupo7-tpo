import React from "react";
import "react-toastify/dist/ReactToastify.css";
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
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/product/:id"
					element={<Product products={productsData} />}
				/>{" "}
				{/* Pasa la lista de productos como prop */}
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
