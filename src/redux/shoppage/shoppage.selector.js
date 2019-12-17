import { createSelector } from "reselect";

const selectorShop = state => state.shop;

export const selectorShopSections = createSelector(
  [selectorShop],
  shop => shop.shopData
);

export const selectCollection = collectParams =>
  createSelector([selectorShopSections], shopData => shopData[collectParams]);

export const selectorCollections = createSelector(
  [selectorShopSections],
  shopData => Object.keys(shopData).map(key => shopData[key])
);
