import { createAction } from "redux-actions";

export const USER_SUBSCRIPTION_REQUESTED = "USER_SUBSCRIPTION_REQUESTED";
export const userSubscriptionRequested = createAction(
  USER_SUBSCRIPTION_REQUESTED
);
export const getEmailToSubscription = createAction("GET_EMAIL_TO_SUBSCRIPTION");
export const userSubscriptionSucceeded = createAction(
  "USER_SUBSCRIPTION_SUCCEEDED"
);
export const userSubscriptionFailed = createAction("USER_SUBSCRIPTION_FAILED");
