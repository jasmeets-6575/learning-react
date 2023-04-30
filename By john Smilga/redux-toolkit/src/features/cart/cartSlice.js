import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"
const initialState = {
    cartItems : cartItems,
    amount : cartItems.length,
    total : 0,
    isLoading : true,
};
console.log(cartItems);
const cartSlice = createSlice({
    name:'cart',
    initialState,
})

export default cartSlice.reducer
