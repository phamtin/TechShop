import * as actions from "./shop.type";

const INITIAL_STATE = {
  shopData: null,
  isLoading: false,
  error: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        shopData: action.payload,
        isLoading: false
      };
    case actions.FETCH_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
