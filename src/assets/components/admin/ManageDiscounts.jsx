import React, { useEffect, useState } from "react";
import { deleteDiscount, getDiscounts, updateDiscount } from "../../../api";
import { DeleteAdvice } from "./Modals/DeleteAdvice";
import { EditDiscountModal } from "./Modals/EditDiscountModal";

export const ManageDiscounts = () => {
	const [discounts, setDiscounts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [discountToDelete, setDiscountToDelete] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [discountToEdit, setDiscountToEdit] = useState(null);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	useEffect(() => {
		const fetchDiscounts = async () => {
			try {
				const data = await getDiscounts();
				const sortedData = data.sort((a, b) => a.discountId - b.discountId);
				setDiscounts(sortedData);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchDiscounts();
	}, []);

	const handleDeleteClick = (id) => {
		setDiscountToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const handleConfirmDelete = async () => {
		try {
			await deleteDiscount(discountToDelete);
			setDiscounts((prevState) =>
				prevState.filter((discount) => discount.discountId !== discountToDelete)
			);
			setIsDeleteModalOpen(false);
			setDiscountToDelete(null);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	const handleEditClick = (discount) => {
		setIsEditModalOpen(true);
		setDiscountToEdit(discount);
	};

	const handleSaveEdit = async (updatedDiscount) => {
		if (!updatedDiscount.discountId) {
			console.error("Discount ID is undefined");
			return;
		}

		try {
			await updateDiscount(updatedDiscount);
			setDiscounts((prevState) =>
				prevState.map((discount) =>
					discount.discountId === updatedDiscount.discountId
						? updatedDiscount
						: discount
				)
			);
			console.log(updatedDiscount);
			setIsEditModalOpen(false);
			setDiscountToEdit(null);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	const handleCloseModal = () => {
		setIsDeleteModalOpen(false);
		setIsEditModalOpen(false);
		setDiscountToDelete(null);
		setDiscountToEdit(null);
	};

	return (
		<div>
			<h2 className="text-xl mb-4">Gestionar Descuentos</h2>
			{error ? (
				<div className="text-red-500">Error: {error.message}</div>
			) : loading ? (
				<div>Cargando...</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{discounts.map((discount) => (
						<div key={discount.discountId} className="border rounded-lg p-4 shadow-lg">
							<div>
								<h5 className="text-lg font-bold">{discount.code}</h5>
								<p>Porcentaje: {discount.percentage}%</p>
								<p>Activo: {discount.active ? '✅' : '⛔'}</p>
							</div>
							<div className="flex justify-end mt-4">
								<button
									className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mr-2"
									onClick={() => handleDeleteClick(discount.discountId)}
								>
									Eliminar
								</button>
								<button
									className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-md"
									onClick={() => handleEditClick(discount)}
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
				message="¿Estás seguro que deseas eliminar este descuento?"
			/>
			<EditDiscountModal
				isOpen={isEditModalOpen}
				onClose={handleCloseModal}
				onSave={handleSaveEdit}
				discount={discountToEdit}
			/>
		</div>
	)
};
