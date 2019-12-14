import * as actionType from "./cart.type";
import { handleAddItem, handleQuantity } from "./cart.utils";

const INITIAL_STATE = {
  isShow: false,
  items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isShow: !state.isShow
      };
    case actionType.ADD_ITEM:
      return {
        ...state,
        items: handleAddItem(state.items, action.payload)
      };
    case actionType.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case actionType.INCREASE_QUANTITY:
      return {
        ...state,
        items: handleQuantity(state.items, action.payload, "inc")
      };
    case actionType.DECREASE_QUANTITY:
      return {
        ...state,
        items: handleQuantity(state.items, action.payload, "dec")
      };
    default:
      return state;
  }
};

export default cartReducer;
