import { createSlice } from "@reduxjs/toolkit";
import cartItems, { CartItemType } from "../../cartItems";

interface InitialStateProps {
  cartItems: CartItemType[];
  amount: number;
  total: number;
  isLoading: boolean;
}
const initialState: InitialStateProps = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
// export const {} = cartSlice.actions
