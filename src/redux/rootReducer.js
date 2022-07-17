import { combineReducers } from "redux";
import productFilterReducer from "../ducks/productFilter/reducers";
import sortedProductsReducer from "../ducks/sortedProducts/reducers";
import sortedSearchProductsReducer from "../ducks/sortedSearchProducts/reducers";
import selectedProductIdReducer from "../ducks/selectedProductId/reducers";
import productsToBagReducer from "../ducks/productsToBag/reducers";
import orderResultReducer from "../ducks/orderRequest/reducers";
import productsToFavoritesReducer from "../ducks/productsToFavorites/reducers";
import subscriptionStatusReducer from "../ducks/userSubscription/reducers";

const rootReducer = combineReducers({
  productFilter: productFilterReducer,
  sortedProducts: sortedProductsReducer,
  sortedSearchProducts: sortedSearchProductsReducer,
  selectedProductId: selectedProductIdReducer,
  productsToBag: productsToBagReducer,
  productsToFavorites: productsToFavoritesReducer,
  orderRequest: orderResultReducer,
  userSubscription: subscriptionStatusReducer,
});

export default rootReducer;
