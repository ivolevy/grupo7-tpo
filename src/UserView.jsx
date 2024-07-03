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

	console.log(orders);

	if (loading) return <div>...Cargando</div>;
	return (
		<>
			<div className="flex h-auto">
				{/* sidebar */}
				<div className="sidebar bg-blue-bizio text-white w-1/5">
					<h2 className="text-2xl p-4"></h2>
					<ul className="mx-auto p-0">
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
						</div>
					)}
					{view === "compras" && (
						<div>
							<h3 className="text-xl mb-4">Historial de Compras</h3>
							{orders.map((order) => (
								<div key={order.id}>
									<p>Fecha: {order.orderDate}</p>
									{order.orderItems.map((item) => (
										<p key={item.id}>
											Producto {item.id}: {item.productName} - Cantidad:
											{item.quantity} - Precio : ${item.price}
										</p>
									))}
									Total: ${order.totalAmount}
									<hr></hr>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};
