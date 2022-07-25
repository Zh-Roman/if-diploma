import { handleActions } from "redux-actions";

import {
  getOrderingProductsID,
  sendOrderFromBagRequested,
  sendOrderFromBagSucceeded,
  sendOrderFromBagFailed,
} from "./actions";

export const initialOrderResult = {
  orderingProductsID: {},
  orderResultData: null,
  loading: false,
  error: null,
};

const handlers = {
  [getOrderingProductsID]: (state, action) => ({
    ...state,
    orderingProductsID: action.payload,
  }),
  [sendOrderFromBagRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [sendOrderFromBagSucceeded]: (state, action) => ({
    ...state,
    loading: false,
    orderResultData: action.payload,
  }),
  [sendOrderFromBagFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
};

export default handleActions(handlers, initialOrderResult);
