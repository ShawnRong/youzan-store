import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

import axios from 'axios'
import url from '../../utility/utility'

import * as actions from '../actions'

export function* fetchBannerList(){
  yield put(actions.fetchBannerListStart())
  try {
    const response = yield axios.get(url.banner)
    yield put(actions.fetchBannerListSuccess(response.data.lists))
  } catch(error){
    yield put(actions.fetchBannerListFail(error))
  }
}