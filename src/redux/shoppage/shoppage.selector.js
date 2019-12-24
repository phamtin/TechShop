import { createSelector } from "reselect";

const selectorShop = state => state.shop;

export const selectorShopSections = createSelector(
  [selectorShop],
  shop => shop.shopData
);

export const selectCollection = collectParams =>
  createSelector([selectorShopSections], shopData =>
    shopData ? shopData[collectParams] : null
  );

export const selectorCollections = createSelector(
  [selectorShopSections],
  shopData => (shopData ? Object.keys(shopData).map(key => shopData[key]) : [])
);
