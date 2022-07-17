import { createAction } from "redux-actions";

export const GET_SORTED_SEARCH_PRODUCTS_REQUESTED =
  "GET_SORTED_SEARCH_PRODUCTS_REQUESTED";
export const getSortedSearchProductsRequested = createAction(
  GET_SORTED_SEARCH_PRODUCTS_REQUESTED
);
export const getSortedSearchProductsSucceeded = createAction(
  "GET_SORTED_SEARCH_PRODUCTS_SUCCEEDED"
);
export const getSortedSearchProductsFailed = createAction(
  "GET_SORTED_SEARCH_PRODUCTS_FAILED"
);
