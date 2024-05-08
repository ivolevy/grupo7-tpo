import { CustomNav } from "./assets/components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./assets/components/cart/CartProduct";
import {
	removeFromCart,
	decreaseCart,
	addtoCart,
	clearCart,
	getTotals,
	checkOut,
	applyDiscount,
} from "./redux/reducers/cartSlice";
import { useEffect, useState } from "react";

export const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const items = cart.cartItems;
	const [formData, setFormData] = useState({
		discountCode: "",
		discountPercentage: 0,
	});

	const dispatch = useDispatch();

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

	const handleCheckout = () => {
		dispatch(checkOut());
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleApplyDiscount = () => {
		dispatch(applyDiscount(formData.discountCode));
	};

	return (
		<>
			<CustomNav />
			<div className="h-screen pt-20">
				<h1 className="mb-10 text-center text-2xl font-bold text-white">
					Cart Items
				</h1>
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
									src={item.image}
									quantity={item.cartQuantity}
									key={item.id}
									funcionEliminar={() => {
										handleRemoveFromCart(item);
									}}
									funcionDecrementar={() => {
										handleProductDecrease(item);
									}}
									funcionIncrementar={() => {
										handleProductIncrease(item);
									}}
								/>
							))
						)}
					</div>
					{/* Sub total */}
					<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
						<div className="flex justify-between">
							<div>
								<p className="text-lg font-bold">Items:</p>
								<p className="text-lg font-bold py-1">Total:</p>
							</div>

							<div className="">
								<p className="flex mb-1 text-lg font-bold justify-center">
									{cart.cartQuantity}
								</p>

								<p className="mb-1 text-lg font-bold">
									{parseFloat(cart.cartTotal).toFixed(2)} $USD
								</p>
								<p className="text-sm text-gray-700">including IVA</p>
							</div>
						</div>
						<hr className="my-4" />

						<div className="flex">
							<input
								type="text"
								name="discountCode"
								placeholder="Discount code"
								className="mt-1 flex-grow rounded-md bg-blue-500 py-1.5 pl-2 pr-10 mr-2 text-blue-50 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
								value={formData.discountCode}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="bg-blue-500 px-3 py-1.5 text-white rounded-md hover:bg-blue-600"
								onClick={() => handleApplyDiscount(formData.discountCode)}
							>
								Add
							</button>
						</div>

						<button
							className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
							onClick={handleCheckout}
						>
							Check out
						</button>
						<button
							className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
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
