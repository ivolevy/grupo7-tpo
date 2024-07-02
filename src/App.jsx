import React, { useContext } from 'react'
import { AdminView } from "./AdminView";
import { Cart } from "./Cart";
import { CheckOut } from "./Checkout";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Login } from "./Login";
import { Payment } from "./Payment";
import { Products } from "./Products";
import { Register } from "./Register";
import { UserView } from "./UserView";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { AuthContext } from "./authContext";
import { AdminNav } from './assets/components/navs/AdminNav';
import { UserNav } from './assets/components/navs/UserNav';
import { GuestNav } from './assets/components/navs/GuestNav';
import { PrivateRoute } from './PrivateRoute';
import './assets/css/Main.css';
import './assets/css/Nav.css';


export const App = () => {

    const { isAuthenticated, role } = useContext(AuthContext);

    const renderNavBasedOnRole = () => {
        switch (role) {
            case "ADMIN":
                return <AdminNav />;
            case "USER":
                return <UserNav />;
            default:
                return <GuestNav />;
        }
    }

    return (
        <Router>
            <main>
                <Provider store={store}>
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
                    {renderNavBasedOnRole()}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart/payment" element={<Payment />} />
                        <Route path="/profile-user" element={<PrivateRoute element={<UserView />} roles={['USER']} />} />
                        <Route path="/profile-admin" element={<PrivateRoute element={<AdminView />} roles={['ADMIN']} />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/checkout" element={<CheckOut />} />
                    </Routes>
                </Provider>
            </main>
        </Router>
    )
}
