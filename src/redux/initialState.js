import { initialFilterValue } from "../ducks/productFilter/reducers";
import { initialSortedProducts } from "../ducks/sortedProducts/reducers";
import { initialSortedSearchProducts } from "../ducks/sortedSearchProducts/reducers";
import { initialSelectedProductId } from "../ducks/selectedProductId/reducers";
import { initialProductsForBag } from "../ducks/productsToBag/reducers";
import { initialOrderResult } from "../ducks/orderRequest/reducers";
import { initialProductsForFavorites } from "../ducks/productsToFavorites/reducers";
import { initialSubscriptionStatus } from "../ducks/userSubscription/reducers";

const initialState = {
  productFilter: initialFilterValue,
  sortedProducts: initialSortedProducts,
  sortedSearchProducts: initialSortedSearchProducts,
  selectedProductId: initialSelectedProductId,
  productsToBag: initialProductsForBag,
  productsToFavorites: initialProductsForFavorites,
  orderRequest: initialOrderResult,
  userSubscription: initialSubscriptionStatus,
};

export default initialState;
