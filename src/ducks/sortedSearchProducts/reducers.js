import { handleActions } from "redux-actions";
import {
  getSortedSearchProductsFailed,
  getSortedSearchProductsRequested,
  getSortedSearchProductsSucceeded,
} from "./actions";

export const initialSortedSearchProducts = {
  sortedSearchProductsData: null,
  loading: false,
  error: null,
};

const handlers = {
  [getSortedSearchProductsRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [getSortedSearchProductsSucceeded]: (state, action) => ({
    ...state,
    loading: false,
    sortedSearchProductsData: action.payload,
  }),
  [getSortedSearchProductsFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
};

export default handleActions(handlers, initialSortedSearchProducts);
