import * as actionType from "./order.type";

const INITIAL_STATE = {
  orders: [],
  error: undefined
};

const fetchOrders = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.FETCH_ORDERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};

export default fetchOrders;
