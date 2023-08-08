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
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
};
const initialState: FilterInitialStateType = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

type IFilterAppState = {
  filtered_products: ProductType[];
  grid_view: boolean;
  sort: string;
  setGridView: () => void;
  setListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  clearFilters: () => void;
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

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

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
  const updateFilters = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let name = e.target.name;
    let value: string | number | boolean = e.target.value;
    if (name === "category") {
      value = e.target.textContent || "";
    }
    if (name === "color") {
      value = e.target.dataset.color || "";
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {};
  return (
    <FilterContext.Provider
      value={{
        ...state,
        clearFilters,
        updateFilters,
        updateSort,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
