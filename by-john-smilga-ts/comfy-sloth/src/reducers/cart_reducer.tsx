import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import { CartInitialStateType } from "../context/cart_context";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: {
    id: number;
    color: string;
    amount: number;
    product: {
      name: string;
      images: { url: string }[];
      price: number;
      stock: number;
    };
  };
}

interface RemoveCartItemAction {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
}

interface ToggleCartItemAmountAction {
  type: typeof TOGGLE_CART_ITEM_AMOUNT;
  payload: {
    id: string;
    value: "inc" | "dec";
  };
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
}

interface CountCartTotalsAction {
  type: typeof COUNT_CART_TOTALS;
}

type CartAction =
  | AddToCartAction
  | RemoveCartItemAction
  | ToggleCartItemAmountAction
  | ClearCartAction
  | CountCartTotalsAction;
const cart_reducer = (state: CartInitialStateType, action: CartAction) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
