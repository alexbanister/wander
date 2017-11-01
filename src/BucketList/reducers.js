export const destinations = (store = [], action) => {
  switch (action.type) {
  case 'ADD_DESTINATION_ACTION':
    return [...store, action.destination];
  case 'REMOVE_DESTINATION_ACTION':
    return store.filter( dest => dest.iata !== action.destination.iata);
  default:
    return store;
  }
};
