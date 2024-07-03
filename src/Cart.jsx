import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./assets/components/cart/CartProduct";
import { PaymentContext } from "./PaymentContext";
import { validateDiscount } from "./api";
import {
	addtoCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from "./redux/reducers/cartSlice";

export const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const items = cart.cartItems;
	const { setIsCheckoutComplete } = useContext(PaymentContext);
	const [formData, setFormData] = useState({
		discountCode: "",
	});
	const [notification, setNotification] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [finalTotal, setFinalTotal] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [descuento, setDescuento] = useState(false);

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleRemoveFromCart = (item) => {
		dispatch(removeFromCart(item));
	};

	const handleProductDecrease = (item) => {
		dispatch(decreaseCart(item));
	};

	const handleProductIncrease = (item) => {
		dispatch(addtoCart(item));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleCheckout = async () => {
		if (items.length === 0) {
			setNotification("El carrito está vacío");
			return;
		}
		setIsCheckoutComplete(true);
		navigate("/cart/payment");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleApplyDiscount = async () => {
		try {
			const discount = await validateDiscount(formData.discountCode);
			localStorage.setItem("discount", JSON.stringify(discount));

			const percentage = JSON.parse(localStorage.getItem("discount"));
			setFinalTotal(cart.cartTotal - cart.cartTotal * percentage.discountPercentage / 100)

			setDescuento(true);

			setDiscountPercentage(discount);
			setNotification("Descuento aplicado correctamente");
		} catch (error) {
			setNotification("Código de descuento inválido");
		}
	};

	return (
		<>
			<div className="h-auto pt-20">
				<h1 className="d-none">Cart Items</h1>
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div className="rounded-lg md:w-2/3">
						{items.length === 0 ? (
							<h2 className="flex text-white text-4xl justify-center align-middle py-28">
								El carrito está vacío
							</h2>
						) : (
							items.map((item) => (
								<CartItem
									name={item.name}
									price={item.price}
									src={`data:image/jpeg;base64,${item.image}`}
									quantity={item.cartQuantity}
									key={item.name}
									funcionEliminar={() => handleRemoveFromCart(item)}
									funcionDecrementar={() => handleProductDecrease(item)}
									funcionIncrementar={() => handleProductIncrease(item)}
								/>
							))
						)}
					</div>
					<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
						<div className="flex justify-between">
							<div>
								<p className="text-lg">Items:</p>
								<p className="text-lg py-1">Total:</p>
							</div>
							<div className="">
								<p className="flex mb-1 text-lg justify-center">
									{cart.cartQuantity}
								</p>
								<p className="mb-1 text-lg">
									{(descuento ? finalTotal : cart.cartTotal).toFixed(2)} $USD
								</p>
								<p className="text-sm text-gray-700">including IVA</p>
							</div>
						</div>
						<hr className="my-4" />
						<div className="flex mb-4">
							<input
								type="text"
								name="discountCode"
								placeholder="Discount code"
								className="flex-grow h-12 rounded-md bg-gray-200 py-2 pl-3 pr-3 text-gray-800 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.discountCode}
								onChange={handleChange}
							/>
							<button
								type="button"
								className="ml-2 h-12 bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
								onClick={handleApplyDiscount}
							>
								Add
							</button>
						</div>
						{notification && (
							<div className="text-red-500 mb-4">{notification}</div>
						)}
						<button
							className="mt-4 w-full h-12 rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
							onClick={handleCheckout}
							disabled={isLoading}
						>
							{isLoading ? "Procesando..." : "Check out"}
						</button>
						<button
							className="mt-4 w-full h-12 rounded-md bg-red-500 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
							onClick={handleClearCart}
						>
							Clear cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
