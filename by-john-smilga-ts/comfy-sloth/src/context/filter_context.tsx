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
  filtered_products: ProductType[];
  all_products: ProductType[];
  grid_view: boolean;
  sort: string;
};
const initialState: FilterInitialStateType = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
};

type IFilterAppState = {
  filtered_products: ProductType[];
  grid_view: boolean;
  sort: string;
  setGridView: () => void;
  setListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, setGridView, setListView }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
