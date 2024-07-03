import React, { useContext } from "react";
import { Provider } from "react-redux";
import { Navigate } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import { AdminNav } from "./assets/components/navs/AdminNav";
import { GuestNav } from "./assets/components/navs/GuestNav";
import { UserNav } from "./assets/components/navs/UserNav";
import "./assets/css/Nav.css";
import "./assets/css/Main.css";
import { AuthContext } from "./authContext";
import { store } from "./redux/store";
import { PurchaseComplete } from "./PurchaseComplete";
import { PrivateRoute } from "./PrivateRoute";
import { PaymentContext } from "./PaymentContext";

export const App = () => {
	const { isAuthenticated, role } = useContext(AuthContext);
	const { isCheckoutComplete, isPaymentComplete } = useContext(PaymentContext);

	const ProtectedRoute = ({ element, condition, redirectPath = '/' }) => {
		return condition ? element : <Navigate to={redirectPath} />;
	};

	const renderNavBasedOnRole = () => {
		switch (role) {
			case "ADMIN":
				return <AdminNav />;
			case "USER":
				return <UserNav />;
			default:
				return <GuestNav />;
		}
	};

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
						<Route path="/product/:id" element={<Product />} />
						<Route path="/cart/payment" element={<ProtectedRoute element={<Payment />} condition={isCheckoutComplete} redirectPath="/" />} />
						<Route path="/profile-user" element={<PrivateRoute element={<UserView />} roles={['ADMIN', 'USER']}></PrivateRoute>} />
						<Route path="/profile-admin" element={<PrivateRoute element={<AdminView />} roles={['ADMIN']}></PrivateRoute>} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/PurchaseComplete" element={<ProtectedRoute element={<PurchaseComplete />} condition={isPaymentComplete} redirectPath="/" />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Provider>
			</main>
		</Router>
	);
};
