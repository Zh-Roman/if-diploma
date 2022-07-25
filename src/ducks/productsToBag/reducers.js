import { handleActions } from "redux-actions";
import {
  deleteAllProductsFromBag,
  deleteProductFromBag,
  getProductToBag,
} from "./actions";

export const initialProductsForBag = {
  products: [],
};

const handle = {
  [getProductToBag]: (state, action) => ({
    products: [...state.products, action.payload],
  }),

  [deleteProductFromBag]: (state, action) => ({
    products: state.products.filter(
      (product) => product.productId !== action.payload.productId
    ),
  }),

  [deleteAllProductsFromBag]: (state) => ({
    ...state,
    products: [],
  }),
};
export default handleActions(handle, initialProductsForBag);
