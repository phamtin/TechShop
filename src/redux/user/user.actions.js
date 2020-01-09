import * as actionType from "./user.type";
import { firestore, transformArrayOrder } from "../../firebase/firebase.utils";

export const setCurrentUser = user => {
  return {
    type: actionType.SET_CURRENT_USER,
    payload: user
  };
};

export const pushPaidOrder = (order, userID) => {
  return dispatch => {
    dispatch(pushPaidOrderStart);
    const orderObject = transformArrayOrder(order);
    const ordersData = firestore
      .collection("users")
      .doc(userID)
      .collection("orders")
      .doc();
    ordersData
      .set(orderObject)
      .then(function() {
        dispatch(pushPaidOrderSuccess());
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        dispatch(pushPaidOrderFail());
        console.error("Error writing document: ", error);
      });
  };
};

export const pushPaidOrderStart = () => ({
  type: actionType.PUSH_PAID_ORDER_START
});

export const pushPaidOrderSuccess = () => ({
  type: actionType.PUSH_PAID_ORDER_SUCCESS
});
export const pushPaidOrderFail = () => ({
  type: actionType.PUSH_PAID_ORDER_FAIL
});
