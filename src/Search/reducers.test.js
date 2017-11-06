import * as reducers from './reducers';

describe('searchResults Reducers', () => {
  it('searchResults should set default state', () => {
    const expectation = [];

    expect(reducers.searchResults(undefined, {})).toEqual(expectation);
  });

  it('searchResults should update', () => {
    const action = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: ['some flights']
    };

    expect(reducers.searchResults(undefined, action)).toEqual(action.searchResults);
  });
});

describe('resultsUpdated Reducers', () => {
  it('resultsUpdated should set default state', () => {
    const expectation = '';

    expect(reducers.resultsUpdated(undefined, {})).toEqual(expectation);
  });

  it('resultsUpdated should update', () => {
    const action = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: ['some flights']
    };

    expect(typeof(reducers.resultsUpdated(undefined, action))).toEqual('number');
  });
});
