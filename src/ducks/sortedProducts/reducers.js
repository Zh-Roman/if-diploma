import { handleActions } from "redux-actions";
import {
  getSortedProductsFailed,
  getSortedProductsRequested,
  getSortedProductsSucceeded,
  getSortedProductByID,
} from "./actions";

export const initialSortedProducts = {
  productByIdData: null,
  sortedProductsData: null,
  loading: false,
  error: null,
};

const handlers = {
  [getSortedProductsRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [getSortedProductsSucceeded]: (state, action) => ({
    ...state,
    loading: false,
    sortedProductsData: action.payload,
  }),
  [getSortedProductByID]: (state, action) => ({
    ...state,
    loading: false,
    productByIdData: action.payload,
  }),
  [getSortedProductsFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
};

export default handleActions(handlers, initialSortedProducts);
