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
import { InitialStateType } from "../context/products_context";

type ActionType = {
  type: string;
  payload?: any;
};
const products_reducer = (state: InitialStateType, action: ActionType) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
