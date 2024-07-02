import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminView } from "./AdminView";
import { Cart } from "./Cart";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Login } from "./Login";
import { Payment } from "./Payment";
import { Product } from "./Product";
import { Products } from "./Products";
import { Register } from "./Register";
import { UserView } from "./UserView";
import { getProducts } from "./api";
import { store } from "./redux/store";
import { AuthProvider } from "./authContext";
import { CustomNav } from "./assets/components/Nav";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        <CustomNav />
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
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/profile-user" element={<UserView />} />
          <Route path="/profile-admin" element={<AdminView />} />
          <Route
            path="/product/:id"
            element={<Product products={getProducts()} />} // Ajustado para pasar los productos correctamente
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </AuthProvider>
);
