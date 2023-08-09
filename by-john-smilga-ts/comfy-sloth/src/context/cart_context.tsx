import React, { useEffect, useContext, useReducer, ReactElement } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
import { SingleProductType } from "./products_context";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

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
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

interface Product {
  name: string;
  images: { url: string }[];
  price: number;
  stock: number;
}
type ICartAppState = {
  cart: CartType[];
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: number) => void;
  clearCart: () => void;
};

const CartContext = React.createContext<ICartAppState>({} as ICartAppState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, cartInitialState);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  const removeItem = (id: string) => {};
  const toggleAmount = (id: string, value: number) => {};
  const clearCart = () => {};

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, clearCart, toggleAmount, removeItem, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
