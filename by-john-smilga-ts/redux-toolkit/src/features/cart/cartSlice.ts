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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
