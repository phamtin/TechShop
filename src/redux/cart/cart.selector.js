import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorItems = createSelector([selectorCart], cart => cart.items);

export const selectorCartIsShow = createSelector(
  [selectorCart],
  cart => cart.isShow
);

export const selectorCartItemsCount = createSelector([selectorItems], items =>
  items.reduce(
    (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
    0
  )
);

export const selectorTotal = createSelector([selectorItems], items =>
  items.reduce(
    (accumalatedQuantity, item) =>
      accumalatedQuantity + item.quantity * item.price,
    0
  )
);
