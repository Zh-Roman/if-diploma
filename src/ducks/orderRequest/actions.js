import { createAction } from "redux-actions";

export const SEND_ORDER_FROM_BAG_REQUESTED = "SEND_ORDER_FROM_BAG_REQUESTED";

export const getOrderingProductsID = createAction("GET_ORDERING_PRODUCTS_ID");

export const sendOrderFromBagRequested = createAction(
  SEND_ORDER_FROM_BAG_REQUESTED
);

export const sendOrderFromBagSucceeded = createAction(
  "SEND_ORDER_FROM_BAG_SUCCEEDED"
);
export const sendOrderFromBagFailed = createAction(
  "SEND_ORDER_FROM_BAG_FAILED"
);
