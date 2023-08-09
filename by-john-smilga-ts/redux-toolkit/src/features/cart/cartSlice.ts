import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartItems, { CartItemType } from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

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

export const getCartItems = createAsyncThunk<CartItemType[]>(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action: PayloadAction<{ id: string }>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, action: PayloadAction<{ id: string }>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem && cartItem.amount > 0) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
