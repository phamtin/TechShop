import * as actions from "./shop.type";

const INITIAL_STATE = {
  shopData: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_SHOP:
      return {
        ...state,
        shopData: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
