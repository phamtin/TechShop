import * as action from "./shop.type";

export const fetchShopData = collection => ({
  type: action.FETCH_DATA_SHOP,
  payload: collection
});
