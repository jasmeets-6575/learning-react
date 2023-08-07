import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { FilterInitialStateType } from "../context/filter_context";
import { ProductType } from "../context/products_context";

type FilterActionType =
  | { type: typeof LOAD_PRODUCTS; payload: ProductType[] }
  | { type: typeof SET_GRIDVIEW }
  | { type: typeof SET_LISTVIEW }
  | { type: typeof UPDATE_SORT; payload: string }
  | { type: typeof SORT_PRODUCTS }
  | { type: typeof UPDATE_FILTERS; payload: { name: string; value: any } }
  | { type: typeof FILTER_PRODUCTS }
  | { type: typeof CLEAR_FILTERS };
const filter_reducer = (
  state: FilterInitialStateType,
  action: FilterActionType
) => {
  if (action.type === LOAD_PRODUCTS) {
    return { ...state, all_products: [...action.payload] };
  }
  throw new Error(`No Matching action type`);
};

export default filter_reducer;
