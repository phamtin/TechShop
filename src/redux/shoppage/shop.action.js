import * as action from "./shop.type";
import {
  firestore,
  transformCollectionSnapshot
} from "../../firebase/firebase.utils";

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    const dataRef = firestore.collection("data");
    dataRef
      .get()
      .then(snapshot => {
        const collectionMap = transformCollectionSnapshot(snapshot);
        dispatch(fetchDataSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchDataFail(error.message)));
  };
};

export const fetchDataStart = () => ({
  type: action.FETCH_DATA_START
});

export const fetchDataSuccess = collectionMap => ({
  type: action.FETCH_DATA_SUCCESS,
  payload: collectionMap
});

export const fetchDataFail = error => ({
  type: action.FETCH_DATA_FAIL,
  payload: error
});
