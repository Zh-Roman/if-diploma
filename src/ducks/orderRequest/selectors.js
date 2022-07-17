export const orderRequestBodySelector = (state) =>
  state.orderRequest.orderingProductsID;
export const orderRequestResultSelector = (state) =>
  state.orderRequest.orderResultData;
export const orderRequestLoadingSelector = (state) =>
  state.orderRequest.loading;
export const orderRequestErrorSelector = (state) => state.orderRequest.error;
