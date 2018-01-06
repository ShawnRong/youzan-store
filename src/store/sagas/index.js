import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionType'
import { fetchBannerList } from './youzan'

export function* youZanPageLoad(){
  yield takeEvery(actionTypes.FETCH_BANNER_LIST, fetchBannerList)
}