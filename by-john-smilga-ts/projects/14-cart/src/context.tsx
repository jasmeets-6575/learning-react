import { useContext, useReducer, createContext, ReactElement } from "react";

export type CartitemsType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext<CartitemsType>({} as CartitemsType);

type CartStateType = { cart: []; loading: boolean };
const initCartState: CartStateType = { cart: [], loading: false };

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
  payload?: CartitemsType;
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
  const AppContextValue = {};
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
