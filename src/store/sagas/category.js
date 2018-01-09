import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

import axios from 'axios'
import url from '../../utility/utility'

import * as actions from '../actions'

export function* fetchTopList(){
  yield put(actions.fetchTopListStart())
  try{
    const response = yield axios.get(url.topList)
    yield put(actions.fetchTopListSuccess(response.data.lists))
  } catch(error) {
    yield put(actions.fetchTopListFail(error))
  }
}

export function* fetchSubList(action){
  yield put(actions.fetchSubListStart())
  try {
    const response = yield axios.post(url.subList, action.id)
    yield put(actions.fetchSubListSuccess(response.data.data))
  } catch(error) {
    yield put(actions.fetchSubListFail(error))
  }
}

export function* fetchRankList(){
  yield put(actions.fetchRankListStart())
  try {
    const response = yield axios.post(url.rank)
    yield put(actions.fetchRankListSuccess(response.data.data))
  } catch(error) {
    yield put(actions.fetchRankListFail(error))
  }
}