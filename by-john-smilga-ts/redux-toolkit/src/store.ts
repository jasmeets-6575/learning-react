import { Store, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store: Store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
console.log(store);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
