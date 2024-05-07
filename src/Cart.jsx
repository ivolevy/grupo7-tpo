import { CustomNav } from "./assets/components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./assets/components/cart/CartProduct";
import {
	removeFromCart,
	decreaseCart,
	addtoCart,
	clearCart,
	getTotals,
} from "./redux/reducers/cartSlice";
import { useEffect } from "react";

export const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const items = cart.cartItems;

	console.log(cart);

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

	return (
		<>
			<CustomNav />
			<div className="h-screen pt-20">
				<h1 className="mb-10 text-center text-2xl font-bold text-white">
					Cart Items
				</h1>
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div className="rounded-lg md:w-2/3">
						{items == 0 ? (
							<h1 className="flex text-white text-4xl justify-center align-middle py-28">
								El carrito esta vacio
							</h1>
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
									{cart.cartTotalQuantity}
								</p>

								<p className="mb-1 text-lg font-bold">
									{Math.round(cart.cartTotalAmount)} $USD
								</p>
								<p className="text-sm text-gray-700">including IVA</p>
							</div>
						</div>
						<hr className="my-4" />

						<button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
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
