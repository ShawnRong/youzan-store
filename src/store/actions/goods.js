import * as actionTypes from "./actionType";

export const fetchGoodsDetail = id => {
  return {
    type: actionTypes.FETCH_GOODS_DETAIL,
    id: id
  };
};

export const fetchGoodsDetailStart = () => {
  return {
    type: actionTypes.FETCH_GOODS_DETAIL_START
  };
};

export const fetchGoodsDetailSuccess = detail => {
  return {
    type: actionTypes.FETCH_GOODS_DETAIL_SUCCESS,
    detail: detail
  };
};

export const fetchGoodsDetailFail = error => {
  return {
    type: actionTypes.FETCH_GOODS_DETAIL_FAILED,
    error: error
  };
};

export const fetchDealList = id => {
  return {
    type: actionTypes.FETCH_DEALLIST,
    id: id
  };
};

export const fetchDealListStart = () => {
  return {
    type: actionTypes.FETCH_DEALLIST_START
  };
};

export const fetchDealListSuccess = deallist => {
  return {
    type: actionTypes.FETCH_DEALLIST_SUCCESS,
    deallist: deallist
  };
};

export const fetchDealListFail = error => {
  return {
    type: actionTypes.FETCH_DEALLIST_FAIL,
    error: error
  };
};
