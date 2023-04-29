import { createSlice} from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const createSlice = createSlice({
  name: "cart",
  initialState,
});

export default createSlice.reducer