import { handleActions } from "redux-actions";
import { getFilterValue, getSearchValue } from "./actions";

export const initialFilterValue = {
  filterValue: null,
  searchValue: null,
};

const handle = {
  [getFilterValue]: (state, action) => ({
    ...state,
    filterValue: action.payload,
  }),
  [getSearchValue]: (state, action) => ({
    ...state,
    searchValue: action.payload,
  }),
};

export default handleActions(handle, initialFilterValue);
