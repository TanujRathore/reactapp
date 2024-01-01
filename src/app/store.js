import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/Slice';


export const store=configureStore({
    reducer:cartReducer
});