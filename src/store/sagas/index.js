import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionType'
import { fetchBannerList } from './youzan'
import { fetchTopList, fetchSubList } from './category'

export function* youZanPageLoad(){
  yield takeEvery(actionTypes.FETCH_BANNER_LIST, fetchBannerList)
}

export function* categoryPageLoad(){
  yield takeEvery(actionTypes.FETCH_TOPLIST, fetchTopList)
  yield takeEvery(actionTypes.FETCH_SUBLIST, fetchSubList)
}