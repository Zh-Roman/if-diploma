import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  GET_SORTED_PRODUCTS_REQUESTED,
  getSortedProductByID,
  getSortedProductsFailed,
  getSortedProductsSucceeded,
} from "./actions";

import ApiClient from "../../api/apiClient";
import { filterValueSelector } from "../productFilter/selectors";
import { selectedProductIdSelector } from "../selectedProductId/selectors";

export function* getSortedProductsSaga() {
  try {
    const productFilterValue = yield select(filterValueSelector);
    const selectedProductId = yield select(selectedProductIdSelector);
    const response = yield call(ApiClient.userRequestApi.getUserRequest);
    let productByIdData;
    if (selectedProductId) {
      productByIdData = response.filter((item) =>
        item.id.includes(selectedProductId)
      );
      yield put(getSortedProductByID(...productByIdData));
    }
    const sortedProducts = response.filter(
      (item) =>
        item.type.toLowerCase().includes(productFilterValue.toLowerCase()) ||
        item.name.toLowerCase().includes(productFilterValue.toLowerCase())
    );

    yield put(getSortedProductsSucceeded(sortedProducts));
  } catch (e) {
    yield put(getSortedProductsFailed(e.message));
  }
}

export default function* sortedProductsSaga() {
  yield takeLatest(GET_SORTED_PRODUCTS_REQUESTED, getSortedProductsSaga);
}
