import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  cartItems: [];
  amount: number;
  total: number;
  isLoading: boolean;
}
const initialState: InitialStateProps = {
  cartItems: [],
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
