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
import {
  InitialStateType,
  ProductType,
  SingleProductType,
} from "../context/products_context";

type SidebarOpenAction = {
  type: typeof SIDEBAR_OPEN;
};

type SidebarCloseAction = {
  type: typeof SIDEBAR_CLOSE;
};

type GetProductsBeginAction = {
  type: typeof GET_PRODUCTS_BEGIN;
};

type GetProductsSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: ProductType[];
};

type GetProductsErrorAction = {
  type: typeof GET_PRODUCTS_ERROR;
};

type GetSingleProductBeginAction = {
  type: typeof GET_SINGLE_PRODUCT_BEGIN;
};

type GetSingleProductSuccessAction = {
  type: typeof GET_SINGLE_PRODUCT_SUCCESS;
  payload: SingleProductType;
};

type GetSingleProductErrorAction = {
  type: typeof GET_SINGLE_PRODUCT_ERROR;
};

// Define the union type for all possible actions
type ProductAction =
  | SidebarOpenAction
  | SidebarCloseAction
  | GetProductsBeginAction
  | GetProductsSuccessAction
  | GetProductsErrorAction
  | GetSingleProductBeginAction
  | GetSingleProductSuccessAction
  | GetSingleProductErrorAction;
const products_reducer = (state: InitialStateType, action: ProductAction) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload?.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  throw new Error(`No Matching action type`);
};

export default products_reducer;
