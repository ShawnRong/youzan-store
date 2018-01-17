import { delay } from "redux-saga";
import { put } from "redux-saga/effects";

import axios from "axios";
import url from "../../utility/utility";

import * as actions from "../actions";

export function* fetchGoodsDetail(action) {
  yield put(actions.fetchGoodsDetailStart());
  try {
    const response = yield axios.post(url.goodsdetail, action.id);
    yield put(actions.fetchGoodsDetailSuccess(response.data.data));
  } catch (error) {
    yield put(actions.fetchGoodsDetailFail(error));
  }
}

export function* fetchDealList(action) {
  yield put(actions.fetchDealListStart());
  try {
    const response = yield axios.post(url.deallist, action.id);
    yield put(actions.fetchDealListSuccess(response.data.lists));
  } catch (error) {
    yield put(actions.fetchDealListFail(error));
  }
}
