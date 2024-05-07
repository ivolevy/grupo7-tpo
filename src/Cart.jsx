import { CustomNav } from "./assets/components/Nav";
import { useSelector } from "react-redux";
import { CartItem } from "./assets/components/cart/CartProduct";
import { useEffect, useState } from "react";

export const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const items = cart.cartItems;

	const [carritoVacio, setcarritoVacio] = useState(true);

	// useEffect(
	// 	(items) => {
	// 		console.log(items);
	// 		if (items == undefined) {
	// 			setcarritoVacio(true);
	// 		} else {
	// 			setcarritoVacio(false);
	// 		}
	// 	},
	// 	[cart]
	// );

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
							<h1 className="text-white text-4xl justify-center align-middle">
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
								/>
							))
						)}
					</div>
					{/* Sub total */}
					<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
						<div className="mb-2 flex justify-between">
							<p className="text-gray-700">Subtotal</p>
							<p className="text-gray-700">$129.99</p>
						</div>
						<div className="flex justify-between">
							<p className="text-gray-700">Shipping</p>
							<p className="text-gray-700">$4.99</p>
						</div>
						<hr className="my-4" />
						<div className="flex justify-between">
							<p className="text-lg font-bold">Total</p>
							<div className="">
								<p className="mb-1 text-lg font-bold">$134.98 USD</p>
								<p className="text-sm text-gray-700">including VAT</p>
							</div>
						</div>
						<button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
							Check out
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
