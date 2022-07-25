import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  GET_SORTED_SEARCH_PRODUCTS_REQUESTED,
  getSortedSearchProductsFailed,
  getSortedSearchProductsSucceeded,
} from "./actions";

import ApiClient from "../../api/apiClient";
import { searchValueSelector } from "../productFilter/selectors";

export function* getSortedSearchProductsSaga() {
  try {
    const productSearchValue = yield select(searchValueSelector);
    const response = yield call(ApiClient.userRequestApi.getUserRequest);
    const sortedProducts = response.filter(
      (item) =>
        item.type.toLowerCase().includes(productSearchValue.toLowerCase()) ||
        item.name.toLowerCase().includes(productSearchValue.toLowerCase())
    );

    yield put(getSortedSearchProductsSucceeded(sortedProducts));
  } catch (e) {
    yield put(getSortedSearchProductsFailed(e.message));
  }
}

export default function* sortedSearchProductsSaga() {
  yield takeLatest(
    GET_SORTED_SEARCH_PRODUCTS_REQUESTED,
    getSortedSearchProductsSaga
  );
}
