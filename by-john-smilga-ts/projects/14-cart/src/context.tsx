import { useContext, useReducer, createContext, ReactElement } from "react";
import cartItems from "./data";
import { getTotals } from "./utils";

export type CartItemsType = {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
};

// const url = "https://www.course-api.com/react-useReducer-cart-project";

export type InitCartStateCart = Map<string, CartItemsType>;

type CartStateType = { cart: InitCartStateCart; loading: boolean };
const initCartState: CartStateType = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const REDUCER_ACTION_TYPE = {
  CLEAR_CART: "CLEAR_CART",
  REMOVE: "REMOVE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  LOADING: "LOADING",
  DISPLAY_ITEMS: "DISPLAY_ITEMS",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
export type ReducerAction = {
  type: string;
  payload?: CartItemsType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  if (action.type === REDUCER_ACTION_TYPE.CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REDUCER_ACTION_TYPE.REMOVE) {
    const newCart = new Map(state.cart);
    if (action.payload) {
      newCart.delete(action.payload?.id);
      return { ...state, cart: newCart };
    }
  }
  if (action.type === REDUCER_ACTION_TYPE.INCREASE) {
    const newCart = new Map(state.cart);
    if (action.payload) {
      const itemId = action.payload.id;
      const item = newCart.get(itemId);
      if (item) {
        const newItem = { ...item, amount: item.amount + 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
      }
    }
  }
  if (action.type === REDUCER_ACTION_TYPE.DECREASE) {
    const newCart = new Map(state.cart);
    if (action.payload) {
      const itemId = action.payload.id;
      const item = newCart.get(itemId);
      if (item) {
        if (item.amount === 1) {
          newCart.delete(itemId);
          return { ...state, cart: newCart };
        }
        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
      }
    }
  }
  throw new Error(`no matching action type : ${action.type}`);
};

type AppContextType = {
  cart: InitCartStateCart;
  loading: boolean;
  clearCart: () => void;
  removeItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalAmount: number;
  totalCost: number;
};
const AppContextInit: AppContextType = {
  loading: false,
  cart: new Map(),
  clearCart: () => {},
  removeItem: () => {},
  increase: () => {},
  decrease: () => {},
  totalAmount: 0,
  totalCost: 0,
};

const AppContext = createContext<AppContextType>(AppContextInit);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_CART });
  };
  const removeItem = (id: string) => {
    const { cart } = state;
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE, payload: cart.get(id) });
  };
  const increase = (id: string) => {
    const { cart } = state;
    dispatch({ type: REDUCER_ACTION_TYPE.INCREASE, payload: cart.get(id) });
  };
  const decrease = (id: string) => {
    const { cart } = state;
    dispatch({ type: REDUCER_ACTION_TYPE.DECREASE, payload: cart.get(id) });
  };

  const AppContextValue: AppContextType = {
    ...state,
    clearCart,
    removeItem,
    increase,
    decrease,
    totalAmount,
    totalCost,
  };
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
