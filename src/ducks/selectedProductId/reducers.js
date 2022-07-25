import { handleActions } from "redux-actions";
import { getSelectedProductId } from "./actions";

export const initialSelectedProductId = {
  selectedProductId: null,
};

const handle = {
  [getSelectedProductId]: (state, action) => ({
    ...state,
    selectedProductId: action.payload,
  }),
};

export default handleActions(handle, initialSelectedProductId);
