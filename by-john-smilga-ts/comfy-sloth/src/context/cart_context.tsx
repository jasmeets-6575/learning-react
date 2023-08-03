import React, { useEffect, useContext, useReducer, ReactElement } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {};
type InitialStateType = typeof initialState;

const CartContext = React.createContext<InitialStateType>({});

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const AppProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
