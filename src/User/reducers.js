export const user = (store = {}, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return Object.assign({}, action.user);
  case 'SIGN_UP_ACTION':
    return Object.assign({}, action.user);
  case 'SIGN_OUT_ACTION':
    return {};
  default:
    return store;
  }
};

export const isLoggedIn = (store = false, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return true;
  case 'SIGN_UP_ACTION':
    return true;
  case 'SIGN_OUT_ACTION':
    return false;
  default:
    return store;
  }
};
