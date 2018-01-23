import { delay } from "redux-saga";
import { put } from "redux-saga/effects";

import axios from "axios";
import url from "../../utility/utility";

import * as actions from "../actions";

export function* fetchShoppingCart(action) {
  yield put(actions.fetchShoppingCartStart());
  try {
    const response = yield axios.get(url.shoppingcart);
    yield put(actions.fetchShoppingCartSuccess(response.data.cartList));
  } catch (error) {
    yield put(actions.fetchShoppingCartFail(error));
  }
}
