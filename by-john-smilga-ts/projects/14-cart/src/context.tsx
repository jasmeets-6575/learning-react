import { useContext, useReducer, createContext, ReactElement } from "react";
import cartItems from "./data";

export type CartItemsType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext<CartItemsType>({} as CartItemsType);

type InitCartStateCart = [
  number,
  { id: number; name: string; price: number }
][];
type CartStateType = { cart: InitCartStateCart; loading: boolean };
const initCartState: CartStateType = {
  cart: cartItems.map((item) => [parseInt(item.id), item]),
  loading: false,
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
  console.log(action);

  return state;
};

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const AppContextValue = { ...state };
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
