import { useContext, useReducer, createContext, ReactElement } from "react";
import cartItems from "./data";

export type CartItemsType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

// const url = "https://www.course-api.com/react-useReducer-cart-project";

type InitCartStateCart = Map<string, CartItemsType>;

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
    }
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

type AppContextType = {
  cart: InitCartStateCart;
  loading: boolean;
  clearCart: () => void;
  removeItem: (id: string) => void;
};
const AppContextInit: AppContextType = {
  loading: false,
  cart: new Map(),
  clearCart: () => {},
  removeItem: () => {},
};

const AppContext = createContext<AppContextType>(AppContextInit);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const clearCart = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_CART });
  };
  const removeItem = (id: string) => {
    const { cart } = state;
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE, payload: cart.get(id) });
  };

  const AppContextValue: AppContextType = { ...state, clearCart, removeItem };
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
