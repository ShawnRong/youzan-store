import { delay } from "redux-saga";
import { put } from "redux-saga/effects";

import axios from "axios";
import url from "../../utility/utility";

import * as actions from "../actions";

export function* fetchAddressList(action) {
  yield put(actions.fetchAddressListStart());
  try {
    const response = yield axios.post(url.addresslist);
    yield put(actions.fetchAddressListSuccess(response.data.data.lists));
  } catch (error) {
    yield put(actions.fetchGoodsDetailFail(error));
  }
}
