import * as actionTypes from "./actionType";

export const fetchShoppiongCart = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART
  };
};

export const fetchShoppingCartStart = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART_START
  };
};

export const fetchShoppingCartSuccess = shopppingCart => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART_SUCCESS,
    shoppingCart: shoppingCart
  };
};

export const fetchShoppingCartFail = error => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART_FAIL,
    error: error
  };
};
