import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  USER_SUBSCRIPTION_REQUESTED,
  userSubscriptionSucceeded,
  userSubscriptionFailed,
} from "./actions";

import ApiClient from "../../api/apiClient";
import { emailToSubscribeSelector } from "./selectors";

export function* getSubscriptionStatusSaga() {
  try {
    const emailToSubscription = yield select(emailToSubscribeSelector);
    const response = yield call(
      ApiClient.userRequestApi.postSubscription,
      emailToSubscription
    );
    yield put(userSubscriptionSucceeded(response));
  } catch (e) {
    yield put(userSubscriptionFailed(e.message));
  }
}

export default function* subscriptionStatusSaga() {
  yield takeLatest(USER_SUBSCRIPTION_REQUESTED, getSubscriptionStatusSaga);
}
