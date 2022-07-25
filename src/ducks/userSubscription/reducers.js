import { handleActions } from "redux-actions";

import {
  userSubscriptionRequested,
  userSubscriptionSucceeded,
  userSubscriptionFailed,
  getEmailToSubscription,
} from "./actions";

export const initialSubscriptionStatus = {
  emailToSubscribe: null,
  subscriptionStatus: null,
  loading: false,
  error: null,
};

const handlers = {
  [userSubscriptionRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [getEmailToSubscription]: (state, action) => ({
    ...state,
    emailToSubscribe: action.payload,
  }),
  [userSubscriptionSucceeded]: (state, action) => ({
    ...state,
    loading: false,
    subscriptionStatus: action.payload,
  }),
  [userSubscriptionFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
};

export default handleActions(handlers, initialSubscriptionStatus);
