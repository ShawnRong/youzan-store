import * as actionTypes from "../actions/actionType";

const initialState = {
  shoppingCart: "",
  loading: false,
  error: null,
  totalPrice: 0,
  selectAll: true
};

const calculateTotalPrice = shopList => {
  let totalPrice = 0;
  shopList.forEach(shop => {
    totalPrice += Object.keys(shop.goodsList).reduce(
      (acc, key) =>
        (acc += shop.goodsList[key].selectToBuy
          ? parseInt(shop.goodsList[key].price)
          : 0),
      0
    );
  });
  return totalPrice;
};

const setDefaultSelectToBuy = shopList => {
  shopList.forEach(shop => {
    shop.selectToBuy = true;
    shop.goodsList.forEach(goods => (goods.selectToBuy = true));
  });
};

const toggleAllGoods = (shopList, selectAll) => {
  return shopList.map(shop => {
    return {
      ...shop,
      goodsList: shop.goodsList.map(good => {
        return {
          ...good,
          // selectToBuy: good.selectToBuy ? false : true
          selectToBuy: !selectAll
        };
      }),
      // selectToBuy: shop.selectToBuy ? false : true
      selectToBuy: !selectAll
    };
  });
};

const toggleShopGoods = (shopList, shopId) => {
  return shopList.map(shop => {
    return shop.shopId === shopId
      ? {
          ...shop,
          goodsList: shop.goodsList.map(good => {
            return {
              ...good,
              // selectToBuy: good.selectToBuy ? false : true
              selectToBuy: !shop.selectToBuy
            };
          }),
          selectToBuy: !shop.selectToBuy
        }
      : shop;
  });
};

const toogleGoods = (shopList, shopId, goodsId) => {
  return shopList.map(shop => {
    return shop.shopId === shopId
      ? {
          ...shop,
          goodsList: shop.goodsList.map(good => {
            return good.id === goodsId
              ? {
                  ...good,
                  selectToBuy: !good.selectToBuy
                }
              : good;
          }),
          selectToBuy: shop.goodsList.every(goods => !goods.selectToBuy)
        }
      : shop;
  });
};

const removeGoods = (shopList, shopId, goodsId) => {
  return shopList
    .map((shop, idx) => {
      if (shop.goodsList.length == 1) {
        return null;
      } else {
        return shop.shopId === shopId
          ? {
              ...shop,
              goodsList: shop.goodsList.filter(goods => goods.id !== goodsId)
            }
          : shop;
      }
    })
    .filter(shop => shop !== null);
};

const minusGoodsCount = (shopList, shopId, goodsId) => {
  return shopList.map(
    shop =>
      shop.shopId === shopId
        ? {
            ...shop,
            goodsList: shop.goodsList.map(
              good =>
                good.id === goodsId
                  ? {
                      ...good,
                      number: good.number - 1,
                      selectToBuy:
                        parseInt(good.number) == 0 ? false : good.selectToBuy
                    }
                  : good
            )
          }
        : shop
  );
};

const addGoodsCount = (shopList, shopId, goodsId) => {
  return shopList.map(
    shop =>
      shop.shopId === shopId
        ? {
            ...shop,
            goodsList: shop.goodsList.map(
              good =>
                good.id === goodsId
                  ? {
                      ...good,
                      number: good.number + 1
                    }
                  : good
            )
          }
        : shop
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOPPING_CART_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_SHOPPING_CART_SUCCESS:
      setDefaultSelectToBuy(action.shoppingCart);
      return {
        ...state,
        loading: false,
        shoppingCart: action.shoppingCart,
        totalPrice: calculateTotalPrice(action.shoppingCart)
      };
    case actionTypes.FETCH_SHOPPING_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.ADD_TO_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.concat(action.goods)
      };
    case actionTypes.REMOVE_FROM_SHOPPIING_CART:
      return {
        ...state,
        shoppingCart: removeGoods(
          state.shoppingCart,
          action.shopId,
          action.goodsId
        )
      };
    case actionTypes.SELECT_ALL_PRODUCTS:
      return {
        ...state,
        shoppingCart: toggleAllGoods(state.shoppingCart, state.selectAll),
        selectAll: !state.selectAll
      };
    case actionTypes.SELECT_SHOP_PRODUCTS:
      return {
        ...state,
        shoppingCart: toggleShopGoods(state.shoppingCart, action.shopId)
      };
    case actionTypes.SELECT_ONE_PRODUCT:
      return {
        ...state,
        shoppingCart: toogleGoods(
          state.shoppingCart,
          action.shopId,
          action.goodsId
        )
      };
    case actionTypes.ADD_GOODS_COUNT:
      return {
        ...state,
        shoppingCart: addGoodsCount(
          state.shoppingCart,
          action.shopId,
          action.goodsId
        )
      };
    case actionTypes.MINUS_GOODS_COUNT:
      return {
        ...state,
        shoppingCart: minusGoodsCount(
          state.shoppingCart,
          action.shopId,
          action.goodsId
        )
      };
    default:
      return state;
  }
};

export default reducer;
