import { createSelector } from "reselect";

const selectorOrders = state => state.orders;

export const selectorAllOrders = createSelector(
  [selectorOrders],
  orders => orders.orders
);
