import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItems: [],
	cartQuantity: 0,
	cartTotal: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addtoCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.info("Increased product quantity", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
				toast.success("Item added to the cart", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		},
		removeFromCart(state, action) {
			const newCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);

			state.cartItems = newCartItems;
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const newCartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				);

				state.cartItems = newCartItems;
			}
		},
		clearCart(state) {
			state.cartItems = [];
		},
		getTotals(state, action) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);

			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addtoCart, removeFromCart, decreaseCart, clearCart, getTotals } =
	cartSlice.actions;

export default cartSlice.reducer;
