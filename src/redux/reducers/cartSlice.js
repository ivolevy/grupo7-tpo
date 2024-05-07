import { createSlice } from "@reduxjs/toolkit";

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
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
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
	},
});

export const { addtoCart, removeFromCart, decreaseCart, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
