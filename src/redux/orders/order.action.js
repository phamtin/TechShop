import * as actionType from "./order.type";

import {
  firestore,
  transformOrdersSnapshot
} from "../../firebase/firebase.utils";

export const fetchOrder = userID => {
  return dispatch => {
    dispatch(fetchOrderStart());
    const ordersRef = firestore
      .collection("users")
      .doc(userID)
      .collection("orders");
    ordersRef
      .get()
      .then(snapshot => {
        const orderMap = transformOrdersSnapshot(snapshot);
        dispatch(fetchOrderSuccess(orderMap));
        console.log(orderMap);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchOrderStart = () => ({
  type: actionType.FETCH_ORDERS_START
});

export const fetchOrderSuccess = collectionMap => {
  console.log(collectionMap);
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    payload: collectionMap
  };
};

export const fetchOrderFail = error => ({
  type: actionType.FETCH_ORDERS_FAIL,
  payload: error
});
