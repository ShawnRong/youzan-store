import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionType";
import { fetchBannerList } from "./youzan";
import { fetchTopList, fetchSubList, fetchRankList } from "./category";
import { fetchSearchResult } from "./search";
import { fetchGoodsDetail, fetchDealList } from "./goods";
import { fetchAddressList } from "./address";

export function* youZanPageLoad() {
  yield takeEvery(actionTypes.FETCH_BANNER_LIST, fetchBannerList);
}

export function* categoryPageLoad() {
  yield takeEvery(actionTypes.FETCH_TOPLIST, fetchTopList);
  yield takeEvery(actionTypes.FETCH_SUBLIST, fetchSubList);
  yield takeEvery(actionTypes.FETCH_RANKLIST, fetchRankList);
}

export function* searchContentLoad() {
  yield takeEvery(actionTypes.FETCH_SEARCH_RESULT, fetchSearchResult);
}

export function* goodsContentLoad() {
  yield takeEvery(actionTypes.FETCH_GOODS_DETAIL, fetchGoodsDetail);
  yield takeEvery(actionTypes.FETCH_DEALLIST, fetchDealList);
}

export function* addressLoad() {
  yield takeEvery(actionTypes.FETCH_ADDRESSLIST, fetchAddressList);
}
