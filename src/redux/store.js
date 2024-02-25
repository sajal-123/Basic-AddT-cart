 import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },  
  devTools: true, //  chrome extension redux devtool-> It will show all things
});
