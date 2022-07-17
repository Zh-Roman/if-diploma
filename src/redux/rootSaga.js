import { all } from "redux-saga/effects";
import sortedProductsSaga from "../ducks/sortedProducts/sagas";
import sortedSearchProductsSaga from "../ducks/sortedSearchProducts/sagas";
import orderResultSaga from "../ducks/orderRequest/sagas";
import subscriptionStatusSaga from "../ducks/userSubscription/sagas";

export default function* rootSaga() {
  yield all([
    sortedProductsSaga(),
    sortedSearchProductsSaga(),
    orderResultSaga(),
    subscriptionStatusSaga(),
  ]);
}
