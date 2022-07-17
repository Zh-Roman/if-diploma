import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  SEND_ORDER_FROM_BAG_REQUESTED,
  sendOrderFromBagSucceeded,
  sendOrderFromBagFailed,
} from "./actions";

import ApiClient from "../../api/apiClient";
import { orderRequestBodySelector } from "./selectors";

export function* getOrderResultSaga() {
  try {
    const orderRequestBody = yield select(orderRequestBodySelector);
    const response = yield call(
      ApiClient.userRequestApi.postUserRequest,
      orderRequestBody
    );
    yield put(sendOrderFromBagSucceeded(response));
  } catch (e) {
    yield put(sendOrderFromBagFailed(e.message));
  }
}

export default function* orderResultSaga() {
  yield takeLatest(SEND_ORDER_FROM_BAG_REQUESTED, getOrderResultSaga);
}
