import * as actionTypes from "../actions/actionType";

const initialState = {
  goodsDetail: "",
  dealList: "",
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GOODS_DETAIL_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_GOODS_DETAIL_SUCCESS:
      return {
        ...state,
        goodsDetail: action.detail,
        loading: false
      };
    case actionTypes.FETCH_GOODS_DETAIL_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.FETCH_DEALLIST_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_DEALLIST_SUCCESS:
      return {
        ...state,
        dealList: action.deallist,
        loading: false
      };
    case actionTypes.FETCH_DEALLIST_FAIL:
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
