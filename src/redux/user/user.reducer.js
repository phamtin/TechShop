import * as actionType from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case actionType.PUSH_PAID_ORDER_START:
      return {
        isLoading: true
      };
    case actionType.PUSH_PAID_ORDER_SUCCESS:
      return {
        isLoading: false
      };
    case actionType.PUSH_PAID_ORDER_FAIL:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
