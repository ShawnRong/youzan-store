import * as actionTypes from "./actionType";

export const fetchShoppingCart = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART
  };
};

export const fetchShoppingCartStart = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_CART_START
  };
};

export const fetchShoppingCartSuccess = shoppingCart => {
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

//ShoppingCart Operation
export const addToShoppingCart = goods => {
  return {
    type: actionTypes.ADD_TO_SHOPPING_CART,
    goods: goods
  };
};

export const removeFromShoppingCart = (shopId, goodsId) => {
  return {
    type: actionTypes.REMOVE_FROM_SHOPPIING_CART,
    shopId: shopId,
    goodsId: goodsId
  };
};

export const selectAllProducts = () => {
  return {
    type: actionTypes.SELECT_ALL_PRODUCTS
  };
};

export const selectShopProducts = shopId => {
  return {
    type: actionTypes.SELECT_SHOP_PRODUCTS,
    shopId: shopId
  };
};

export const selectProduct = (shopId, goodsId) => {
  return {
    type: actionTypes.SELECT_ONE_PRODUCT,
    shopId: shopId,
    goodsId: goodsId
  };
};

export const updateTotalPrice = () => {
  return {
    type: actionTypes.updateTotalPrice
  };
};

export const addGoodsCount = (shopId, goodsId) => {
  return {
    type: actionTypes.ADD_GOODS_COUNT,
    shopId: shopId,
    goodsId: goodsId
  };
};

export const minusGoodsCount = (shopId, goodsId) => {
  return {
    type: actionTypes.MINUS_GOODS_COUNT,
    shopId: shopId,
    goodsId: goodsId
  };
};
