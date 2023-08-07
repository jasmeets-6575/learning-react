import React, { useEffect, useContext, useReducer, ReactElement } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { ProductType, useProductsContext } from "./products_context";

export type FilterInitialStateType = {
  filtered_products: [];
  all_products: [];
};
const initialState: FilterInitialStateType = {
  filtered_products: [],
  all_products: [],
};

type IFilterAppState = {
  state: FilterInitialStateType;
};

const FilterContext = React.createContext<IFilterAppState>(
  {} as IFilterAppState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const FilterProvider = ({ children }: ChildrenType): ReactElement => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
