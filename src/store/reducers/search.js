import * as actionTypes from "../actions/actionType";

const initialState = {
  searchResult: "",
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_RESULT_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        searchResult: action.searchResult,
        loading: false
      };
    case actionTypes.FETCH_SEARCH_RESULT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
