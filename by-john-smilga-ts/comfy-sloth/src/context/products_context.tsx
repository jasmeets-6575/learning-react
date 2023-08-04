import axios from "axios";
import React, { ReactElement, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
}

export type InitialStateType = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: ProductType[];
  featured_products: ProductType[];
};
const initialState: InitialStateType = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

export type IAppState = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const ProductsContext = React.createContext<IAppState>({} as IAppState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const fetchProducts = async (url: string) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
