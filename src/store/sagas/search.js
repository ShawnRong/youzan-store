import { delay } from "redux-saga";
import { put } from "redux-saga/effects";

import axios from "axios";
import url from "../../utility/utility";

import * as actions from "../actions";

export function* fetchSearchResult(action) {
  yield put(actions.fetchSearchResultStart());
  try {
    const response = yield axios.post(url.searchList, action.keyword);
    yield put(actions.fetchSearchResultSuccess(response.data.lists));
  } catch (error) {
    yield put(actions.fetchSearchResultFail(error));
  }
}
