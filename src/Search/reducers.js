export const searchResults = (store = [], action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_RESULTS':
    return [...action.searchResults];
  default:
    return store;
  }
};

export const resultsUpdated = (store = '', action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_RESULTS':
    return Date.now();
  default:
    return store;
  }
};
