import { createAction } from "redux-actions";

export const getProductToBag = createAction("GET_PRODUCT_TO_BAG");
export const deleteProductFromBag = createAction("DELETE_PRODUCT_FROM_BAG");
export const deleteAllProductsFromBag = createAction(
  "DELETE_ALL_PRODUCTS_FROM_BAG"
);
