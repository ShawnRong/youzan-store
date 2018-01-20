import * as actionTypes from "./actionType";

export const fetchAddressList = () => {
  return {
    type: actionTypes.FETCH_ADDRESSLIST
  };
};

export const fetchAddressListStart = () => {
  return {
    type: actionTypes.FETCH_ADDRESSLIST_START
  };
};

export const fetchAddressListSuccess = addressList => {
  return {
    type: actionTypes.FETCH_ADDRESSLIST_SUCCESS,
    addressList: addressList
  };
};

export const fetchAddressListFail = error => {
  return {
    type: actionTypes.FETCH_ADDRESSLIST_FAIL,
    error: error
  };
};
