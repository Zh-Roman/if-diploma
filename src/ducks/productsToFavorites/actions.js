import { createAction } from "redux-actions";

export const getProductToFavorites = createAction("GET_PRODUCT_TO_FAVORITES");
export const deleteProductFromFavorites = createAction(
  "DELETE_PRODUCT_FROM_FAVORITES"
);
