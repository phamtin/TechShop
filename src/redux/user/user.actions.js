import * as actionType from "./user.type";

export const setCurrentUser = user => {
  return {
    type: actionType.SET_CURRENT_USER,
    payload: user
  };
};
