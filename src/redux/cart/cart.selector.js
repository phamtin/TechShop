import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorCartItems = createSelector(
  [selectorCart],
  cart => cart.items
);

export const selectorCartIsShow = createSelector(
  [selectorCart],
  cart => cart.isShow
);

export const selectorCartItemsCount = createSelector(
  [selectorCartItems],
  items =>
    items.reduce(
      (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
      0
    )
);

export const selectorCartTotal = createSelector([selectorCartItems], items =>
  items.reduce(
    (accumalatedQuantity, item) =>
      accumalatedQuantity + item.quantity * item.price,
    0
  )
);
