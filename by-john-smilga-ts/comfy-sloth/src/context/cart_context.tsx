import React, { useEffect, useContext, useReducer, ReactElement } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

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
  total_amount: number;
  total_items: number;
  shipping_fee: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: "inc" | "dec") => void;
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
  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const toggleAmount = (id: string, value: "inc" | "dec") => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
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
