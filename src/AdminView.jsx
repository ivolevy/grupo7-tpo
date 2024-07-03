import React, { useState } from "react";
import { CreateDiscount } from "./assets/components/admin/CreateDiscount";
import { CreateProduct } from "./assets/components/admin/CreateProduct";
import { ManageDiscounts } from "./assets/components/admin/ManageDiscounts";
import { ManageProducts } from "./assets/components/admin/ManageProducts";
import { ManageUsers } from "./assets/components/admin/ManageUsers";

export const AdminView = () => {
	const [view, setView] = useState("crearProducto");
	const [products, setProducts] = useState([]);

	const handleViewChange = (viewName) => {
		setView(viewName);
	};

	const categories = [
		"Todos",
		"teclados",
		"mouse",
		"auriculares",
		"accesorios",
		"sillas",
		"monitores",
		"perifericos",
		"graficas",
	];

	const roles = ["ROLE_ADMIN", "ROLE_USER"];

	return (
		<>
			<div className="flex min-h-[50vh]">
				{/* Sidebar */}
				<div className="sidebar bg-blue-bizio text-white w-1/5">
					<h2 className="text-2xl p-4">Admin Dashboard</h2>
					<ul className=" mx-auto p-0">
						<li
							className={`p-4 cursor-pointer ${
								view === "crearProducto" ? "bg-gray-700" : ""
							} text-left`}
							onClick={() => handleViewChange("crearProducto")}
						>
							Crear Producto
						</li>
						<li
							className={`p-4 cursor-pointer ${
								view === "crearDescuento" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("crearDescuento")}
						>
							Crear Descuento
						</li>
						<li
							className={`p-4 cursor-pointer ${
								view === "gestionarProductos" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("gestionarProductos")}
						>
							Gestionar Productos
						</li>
						<li
							className={`p-4 cursor-pointer ${
								view === "gestionarUsuarios" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("gestionarUsuarios")}
						>
							Gestionar Usuarios
						</li>
						<li
							className={`p-4 cursor-pointer ${
								view === "gestionarDescuentos" ? "bg-gray-700" : ""
							}`}
							onClick={() => handleViewChange("gestionarDescuentos")}
						>
							Gestionar Descuentos
						</li>
					</ul>
				</div>

				{/* Contenido principal */}
				<div className="main-content w-4/5 p-8 bg-white">
					{view === "crearProducto" && (
						<CreateProduct categories={categories} />
					)}

					{view === "crearDescuento" && <CreateDiscount />}

					{view === "gestionarProductos" && (
						<ManageProducts categories={categories} />
					)}

					{view === "gestionarUsuarios" && <ManageUsers roles={roles} />}

					{view === "gestionarDescuentos" && <ManageDiscounts />}
				</div>
			</div>
		</>
	);
};
