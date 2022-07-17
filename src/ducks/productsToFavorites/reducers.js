import { handleActions } from "redux-actions";
import { getProductToFavorites, deleteProductFromFavorites } from "./actions";

export const initialProductsForFavorites = {
  favoriteProducts: [],
};

const handle = {
  [getProductToFavorites]: (state, action) => ({
    favoriteProducts: [...state.favoriteProducts, action.payload],
  }),

  [deleteProductFromFavorites]: (state, action) => ({
    favoriteProducts: state.favoriteProducts.filter(
      (product) => product.productId !== action.payload.productId
    ),
  }),
};
export default handleActions(handle, initialProductsForFavorites);
