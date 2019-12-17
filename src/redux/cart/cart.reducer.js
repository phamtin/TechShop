import * as actionType from "./cart.type";
import { handleAddItem, handleQuantity } from "./cart.utils";

const INITIAL_STATE = {
  items: [],
  isShow: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.TOGGLE_CART_DROPDOWN:
      console.log("object");
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
    case actionType.EMPTY_CART:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
