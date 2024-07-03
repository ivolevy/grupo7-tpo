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
				(item) => item.productId === action.payload.productId,
				console.log(action.payload)
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				state.cartQuantity += 1;
				toast.info("Increased product quantity", {
					position: "top-center",
					autoClose: 2000,
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
				state.cartQuantity += 1;
				toast.success("Item added to the cart", {
					position: "top-center",
					autoClose: 2000,
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
			const removedItem = state.cartItems.find(
				(item) => item.productId === action.payload.productId
			);
			state.cartQuantity -= removedItem.cartQuantity;
			state.cartItems = state.cartItems.filter(
				(cartItem) => cartItem.productId !== action.payload.productId
			);
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.productId === action.payload.productId
			);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				state.cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				state.cartQuantity -= 1;
				state.cartItems = state.cartItems.filter(
					(cartItem) => cartItem.productId !== action.payload.productId
				);
			}
		},
		clearCart(state) {
			state.cartItems = [];
			state.cartQuantity = 0;
		},
		checkOut(state) {
			if (state.cartQuantity === 0) {
				return;
			}
			state.cartItems = [];
			toast.success("Compra hecha", {
				position: "top-center",
				autoClose: 2000, 
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		},
		getTotals(state) {
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

			if (state.discountApplied) {
				total -= total * state.discountPercentage;
			}

			state.cartTotal = total;
			state.cartQuantity = quantity;
		},
	},
});

export const {
	addtoCart,
	removeFromCart,
	decreaseCart,
	clearCart,
	getTotals,
	checkOut,
	applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
