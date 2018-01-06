import * as actionTypes from '../actions/actionType'

const initialState = {
  bannerList: [],
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_BANNER_LIST_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return {
        ...state,
        bannerList: action.bannerList,
        loading: false
      }
    case actionTypes.FETCH_BANNER_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default reducer