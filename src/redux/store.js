import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";

export const store = createStore(cartReducer);
