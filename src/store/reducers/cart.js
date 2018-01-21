import * as actionTypes from "../actions/actionType";

const initialState = {
  shoppingCart: "",
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOPPING_CART_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_SHOPPING_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        shoppingCart: action.shoppingCart
      };
    case actionTypes.FETCH_SHOPPING_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
