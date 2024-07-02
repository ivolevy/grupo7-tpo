import React, { useEffect, useState } from "react";
import { getSingleUser, getUserOrders } from "./api";

export const UserView = () => {
	const [view, setView] = useState("perfil");
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState(null);

	const handleViewChange = (viewName) => {
		setView(viewName);
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getSingleUser();
				setUser(userData);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUser();
	}, []);

	useEffect(() => {
		const fetchUserOrders = async () => {
			try {
				const userOrders = await getUserOrders();
				setOrders(userOrders);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserOrders();
	}, []);

	console.log(user);
	console.log(orders);

	if (loading) return <div>...Cargando</div>;
	return (
		<>
			<div className="flex h-auto">
				{/* sidebar */}
				<div className="sidebar bg-blue-bizio text-white w-1/5">
					<h2 className="text-2xl p-4">Iñaki</h2>
					<ul>
						<li
							className={`p-4 cursor-pointer ${
								view === "perfil" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("perfil")}
						>
							Perfil
						</li>
						<li
							className={`p-4 cursor-pointer ${
								view === "compras" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("compras")}
						>
							Compras
						</li>
					</ul>
				</div>
				{/* main menu */}
				<div className="main-content w-4/5 p-8 bg-white">
					{view === "perfil" && (
						<div>
							<h3 className="text-xl mb-4">Perfil del Usuario</h3>
							<p>Nombre: {user.firstname}</p>
							<p>Apellido: {user.lastName}</p>
							<p>Email: {user.email}</p>
							<p>Rol: {user.role}</p>
						</div>
					)}
					{view === "compras" && (
						<div>
							<h3 className="text-xl mb-4">Historial de Compras</h3>
							<ul>
								<li>Producto 1 - $100</li>
								<li>Producto 2 - $50</li>
								<li>Producto 3 - $75</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
