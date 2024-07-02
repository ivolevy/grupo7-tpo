import React, { useEffect, useState } from "react";
import {
	deleteProduct,
	getProducts,
	getProductsAdmin,
	updateProduct,
} from "../../../api";
import { DeleteAdvice } from "./Modals/DeleteAdvice";
import { EditProductModal } from "./Modals/EditProductModal";

export const ManageProducts = ({ categories = [] }) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModelOpen] = useState(false);
	const [productToDelete, setProductToDelete] = useState(null);
	const [productToEdit, setProductToEdit] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProductsAdmin();
				const sortedData = data.sort((a, b) => a.productId - b.productId);
				setProducts(sortedData);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleDeleteClick = (id) => {
		setIsDeleteModelOpen(true);
		setProductToDelete(id);
	};

	const handleConfirmDelete = async () => {
		try {
			await deleteProduct(productToDelete);
			setProducts((prevState) =>
				prevState.filter((product) => product.productId !== productToDelete)
			);
			setIsDeleteModelOpen(false);
			setProductToDelete(null);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	const handleEditClick = (product) => {
		setIsEditModalOpen(true);
		setProductToEdit(product);
	};

	const handleSaveEdit = async (updatedProduct) => {
		if (!updatedProduct.get("productId")) {
			console.error("Product ID is undefined");
			return;
		}
		try {
			await updateProduct(updatedProduct);
			const updatedProductObj = Array.from(updatedProduct.entries()).reduce(
				(obj, [key, value]) => {
					obj[key] = value;
					return obj;
				},
				{}
			);
			setProducts((prevState) =>
				prevState.map((product) =>
					product.productId === updatedProductObj.productId
						? updatedProductObj
						: product
				)
			);
			const data = await getProducts();
			data.sort((a, b) => a.productId - b.productId);
			setProducts(data);
			setIsEditModalOpen(false);
			setProductToEdit(null);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	const handleCloseModal = () => {
		setIsDeleteModelOpen(false);
		setIsEditModalOpen(false);
		setProductToEdit(null);
		setProductToDelete(null);
	};

	return (
		<div>
			<h3 className="text-xl mb-4">Gestionar Productos</h3>
			{error ? (
				<div className="text-red-500">Error: {error.message}</div>
			) : loading ? (
				<div>Cargando...</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{products.map((product) => (
						<div
							key={product.productId}
							className="border rounded-lg p-4 shadow-lg"
						>
							<div className="flex items-center">
								<img
									src={`data:image/jpeg;base64,${product.image}`}
									alt={product.name}
									className="h-32 w-32 object-cover rounded-lg shadow-sm mr-4"
								/>
								<div>
									<h5 className="text-lg font-bold">{product.name}</h5>
									<p>precio: ${product.price}</p>
									<p>Stock: {product.stock}</p>
								</div>
							</div>
							<div className="flex justify-end mt-4">
								<button
									className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mr-2"
									onClick={() => handleDeleteClick(product.productId)}
								>
									Eliminar
								</button>
								<button
									className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md"
									onClick={() => handleEditClick(product)}
								>
									Editar
								</button>
							</div>
						</div>
					))}
				</div>
			)}
			<DeleteAdvice
				isOpen={isDeleteModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirmDelete}
				message="¿Estás seguro que deseas eliminar este producto?"
			/>
			<EditProductModal
				isOpen={isEditModalOpen}
				onClose={handleCloseModal}
				onSave={handleSaveEdit}
				product={productToEdit}
				categories={categories}
			/>
		</div>
	);
};
