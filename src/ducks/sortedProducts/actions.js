import { createAction } from "redux-actions";

export const GET_SORTED_PRODUCTS_REQUESTED = "GET_SORTED_PRODUCTS_REQUESTED";
export const getSortedProductsRequested = createAction(
  GET_SORTED_PRODUCTS_REQUESTED
);
export const getSortedProductByID = createAction("GET_SORTED_PRODUCT_BY_ID");
export const getSortedProductsSucceeded = createAction(
  "GET_SORTED_PRODUCTS_SUCCEEDED"
);
export const getSortedProductsFailed = createAction(
  "GET_SORTED_PRODUCTS_FAILED"
);
