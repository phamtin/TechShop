import * as actionType from "./cart.type";

export const ToggleCartDropdown = () => ({
  type: actionType.TOGGLE_CART_DROPDOWN
});

export const AddItemToCart = item => ({
  type: actionType.ADD_ITEM,
  payload: item
});

export const RemoveItem = item => ({
  type: actionType.REMOVE_ITEM,
  payload: item
});

export const InscreaseQuantity = item => ({
  type: actionType.INCREASE_QUANTITY,
  payload: item
});

export const DescreaseQuantity = item => ({
  type: actionType.DECREASE_QUANTITY,
  payload: item
});

export const EmptyCart = () => ({
  type: actionType.EMPTY_CART
});
