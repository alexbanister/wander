export const destinations = (store = [], action) => {
  switch (action.type) {
  case 'ADD_DESTINATION_ACTION':
    return [...store, action.destination];
  default:
    return store;
  }
};
