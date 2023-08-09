import React, { useEffect, useContext, useReducer, ReactElement } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

type CartType = {
  id: string;
  name: string;
  color: string;
  amount: number;
  image: string;
  price: number;
  max: number;
};

export type CartInitialStateType = {
  cart: CartType[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
};
const cartInitialState: CartInitialStateType = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

type ICartAppState = {};

const CartContext = React.createContext<ICartAppState>({} as ICartAppState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, cartInitialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
