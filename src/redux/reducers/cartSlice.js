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
	},
});

export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
