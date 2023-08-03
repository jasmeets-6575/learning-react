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

export type IAppState = {
  loading: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};
const AppState = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

export type InitialStateType = {
  isSidebarOpen: boolean;
};
const initialState = {
  isSidebarOpen: false,
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

  const appContextValue: IAppState = { openSidebar, closeSidebar };
  return (
    <ProductsContext.Provider value={appContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
