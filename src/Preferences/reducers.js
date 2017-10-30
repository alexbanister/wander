export const preferences = (store = {}, action) => {
  switch (action.type) {
  case 'SAVE_PREFERENCES':
    return Object.assign({}, action.preferences);
  default:
    return store;
  }
};
