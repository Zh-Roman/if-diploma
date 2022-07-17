export const emailToSubscribeSelector = (state) =>
  state.userSubscription.emailToSubscribe;
export const subscriptionStatusSelector = (state) =>
  state.userSubscription.subscriptionStatus;
export const subscriptionStatusLoadingSelector = (state) =>
  state.userSubscription.loading;
export const subscriptionStatusErrorSelector = (state) =>
  state.userSubscription.error;
