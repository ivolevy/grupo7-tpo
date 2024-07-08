import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrder, applyDiscount } from "./api";
import { PaymentContext } from "./PaymentContext";
import { checkOut } from "./redux/reducers/cartSlice";

const PaymentForm = () => {
	const [cardType, setCardType] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cvv, setCVV] = useState("");
	const [dni, setDNI] = useState("");
	const { setIsPaymentComplete } = useContext(PaymentContext);
	const [cardHolder, setCardHolder] = useState("");

	const handleCardTypeChange = (e) => {
		setCardType(e.target.value);
	};

	const [notification, setNotification] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const cart = useSelector((state) => state.cart);
	const items = cart.cartItems;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCheckout = async () => {
		if (items.length === 0) {
			setNotification("El carrito está vacío");
			return;
		}

		setIsLoading(true);
		try {
			const orderItems = items.map((item) => ({
				productId: item.productId,
				quantity: item.cartQuantity,
			}));

			const percentage = JSON.parse(localStorage.getItem("discount"));

			const newOrder = await createOrder(orderItems);

			if (percentage) {
				await applyDiscount(percentage.discountPercentage , newOrder.id);
			}

			newOrder.totalAmount = newOrder.totalAmount - newOrder.totalAmount * percentage.discountPercentage / 100;



			dispatch(checkOut());
			setIsPaymentComplete(true);
			setNotification("Orden creada exitosamente");
			navigate("/PurchaseComplete", { state: { order: newOrder } });
		} catch (error) {
			if (error == "Error: No hay stock") {
				toast.error("No hay stock", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			} else {
				toast.error("Se produjo un error al cargar la orden", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleCardNumberChange = (e) => {
		const inputNumber = e.target.value.replace(/\D/g, ""); // Solo números
		if (inputNumber.length <= 16) {
			const formattedNumber = inputNumber.replace(/(\d{4})/g, "$1 ").trim();
			setCardNumber(formattedNumber);
		}
	};

	const handleCVVChange = (e) => {
		const inputCVV = e.target.value.replace(/\D/g, ""); // Solo números para CVV
		if (inputCVV.length <= 3) {
			setCVV(inputCVV);
		}
	};

	const handleDNIChange = (e) => {
		const inputDNI = e.target.value.replace(/\D/g, ""); // Solo números para DNI
		if (inputDNI.length <= 8) {
			setDNI(inputDNI);
		}
	};

	const handleCardHolderChange = (e) => {
		const inputCardHolder = e.target.value.replace(/[^a-zA-Z ]/g, ""); // Solo letras y espacios
		if (inputCardHolder.length <= 30) {
			setCardHolder(inputCardHolder);
		}
	};

	const isSubmitDisabled =
		cardNumber.replace(/\D/g, "").length < 16 ||
		cvv.length !== 3 ||
		dni.length < 7 ||
		dni.length > 8 ||
		cardHolder.length < 1 ||
		cardHolder.length > 30;

	return (
		<div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl mb-4">Payment Information</h1>
			<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="col-span-2">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="TipoTarjeta"
					>
						Tipo de Tarjeta
					</label>
					<div className="relative">
						<select
							id="TipoTarjeta"
							value={cardType}
							onChange={handleCardTypeChange}
							className="block w-full p-3 border rounded-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
						>
							<option value="">Seleccionar Tipo de Tarjeta</option>
							<option value="mastercard">MasterCard</option>
							<option value="amex">American Express</option>
							<option value="visa">Visa</option>
							<option value="discover">Discover</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-700"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div>
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="NumeroTarjeta"
					>
						Card number
					</label>
					<input
						id="NumeroTarjeta"
						type="text"
						value={cardNumber}
						onChange={handleCardNumberChange}
						className="block w-full p-3 border rounded-md"
						placeholder="Card number"
						maxLength="19" // 16 digits + 3 spaces
					/>
				</div>
				<div>
					<label className="block text-gray-700 text-sm mb-2" htmlFor="cvv">
						CVV
					</label>
					<input
						id="cvv"
						type="text"
						value={cvv}
						onChange={handleCVVChange}
						className="block w-full p-3 border rounded-md"
						placeholder="Poner CVV"
						maxLength="3"
					/>
				</div>
				<div>
					<label className="block text-gray-700 text-sm mb-2" htmlFor="dni">
						DNI
					</label>
					<input
						id="dni"
						type="text"
						value={dni}
						onChange={handleDNIChange}
						className="block w-full p-3 border rounded-md"
						placeholder="Poner DNI"
						maxLength="8"
					/>
				</div>
				<div>
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="TitulardeTarjeta"
					>
						Card holder
					</label>
					<input
						id="TitulardeTarjeta"
						type="text"
						value={cardHolder}
						onChange={handleCardHolderChange}
						className="block w-full p-3 border rounded-md"
						placeholder="Card holder"
						maxLength="30"
					/>
				</div>
				<div className="col-span-2">
					<button
						type="button"
						className={`w-full p-3 rounded-md ${
							cardType && !isSubmitDisabled
								? "bg-blue-500 hover:bg-blue-600"
								: "bg-gray-400 cursor-not-allowed"
						}`}
						onClick={handleCheckout}
						disabled={!cardType || isSubmitDisabled}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export const Payment = () => {
	return (
		<>
			<div className="h-auto">
				<PaymentForm />
			</div>
		</>
	);
};
