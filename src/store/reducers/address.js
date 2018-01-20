import * as actionTypes from "../actions/actionType";

const initialState = {
  addressList: "",
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADDRESSLIST_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ADDRESSLIST_SUCCESS:
      return {
        ...state,
        addressList: action.addressList,
        loading: false
      };
    case actionTypes.FETCH_ADDRESSLIST_FAIL:
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
