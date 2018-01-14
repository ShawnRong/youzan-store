import * as actionTypes from "./actionType";

export const fetchSearchResult = keyword => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULT,
    keyword: keyword
  };
};

export const fetchSearchResultStart = () => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULT_START
  };
};

export const fetchSearchResultSuccess = searchResult => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULT_SUCCESS,
    searchResult: searchResult
  };
};

export const fetchSearchResultFail = error => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULT_FAILED,
    error: error
  };
};
