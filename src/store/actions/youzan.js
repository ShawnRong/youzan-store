import * as actionTypes from './actionType'

export const fetchBanner = () => {
  return {
    type: actionTypes.FETCH_BANNER_LIST
  }
}

export const fetchBannerListStart = () => {
  return {
    type: actionTypes.FETCH_BANNER_LIST_START
  }
}

export const fetchBannerListSuccess = (bannerList) => {
  return {
    type: actionTypes.FETCH_BANNER_LIST_SUCCESS,
    bannerList: bannerList
  }
}

export const fetchBannerListFail = (error) => {
  return {
    type: actionTypes.FETCH_BANNER_LIST_FAIL,
    error: error
  }
}
