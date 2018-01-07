import * as actionTypes from './actionType'

export const fetchTopList = () => {
  return {
    type: actionTypes.FETCH_TOPLIST
  }
}

export const fetchTopListStart = () => {
  return {
    type: actionTypes.FETCH_TOPLIST_START
  }
}

export const fetchTopListSuccess = (topList) => {
  return {
    type: actionTypes.FETCH_TOPLIST_SUCCESS,
    topList: topList
  }
}

export const fetchTopListFail = (error) => {
  return {
    type: actionTypes.FETCH_TOPLIST_FAIL,
    error: error
  }
}

//Fetch sublist
export const fetchSubList = (id) => {
  return {
    type: actionTypes.FETCH_SUBLIST,
    id: id
  }
}

export const fetchSubListStart = () => {
  return {
    type: actionTypes.FETCH_SUBLIST_START
  }
}

export const fetchSubListSuccess = (subLists) => {
  return {
    type: actionTypes.FETCH_SUBLIST_SUCCESS,
    subLists: subLists
  }
}

export const fetchSubListFail = (error) => {
  return {
    type: actionTypes.FETCH_SUBLIST_FAIL,
    error: error
  }
}