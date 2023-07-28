import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactElement,
} from "react";
import reducer from "./reducer";

export type CartitemsType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};
type CartStateType = { cart: [] };

const initCartState: CartStateType = { cart: [] };

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext<CartitemsType>({} as CartitemsType);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
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
