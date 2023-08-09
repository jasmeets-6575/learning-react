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
    id: string;
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
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color: color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
