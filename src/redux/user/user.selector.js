import { createSelector } from "reselect";

const selectorUser = state => state.user;

export const selectorUserItems = createSelector(
  [selectorUser],
  user => user.currentUser
);
