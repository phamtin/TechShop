import { createSelector } from "reselect";

const selectorUser = state => state.user;

export const selectorCurrentUser = createSelector(
  [selectorUser],
  user => user.currentUser
);

export const selectorIsLoading = createSelector(
  [selectorUser],
  user => user.isLoading
);
