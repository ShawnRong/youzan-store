import * as actionTypes from '../actions/actionType'

const initialState = {
  topList: [],
  subLists: [],
  rankLists: [],
  error: null,
  loading: false
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_TOPLIST_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_TOPLIST_SUCCESS:
      return {
        ...state,
        topList: action.topList,
        loading: false
      }
    case actionTypes.FETCH_TOPLIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.FETCH_SUBLIST_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_SUBLIST_SUCCESS:
      return {
        ...state,
        subLists: action.subLists,
        loading: false
      }
    case actionTypes.FETCH_SUBLIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.FETCH_RANKLIST_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_RANKLIST_SUCCESS:
      return {
        ...state,
        rankLists: action.ranklists,
        loading: false
      }
    case actionTypes.FETCH_RANKLIST_FAILED:
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