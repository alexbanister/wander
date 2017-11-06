import * as actions from './actions';

describe('Search action', ()=>{
  it('UPDATE_SEARCH_RESULTS should take object return an action', () => {
    const searchResults = ['some flights'];
    const expected = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: ['some flights']
    };

    expect(actions.updateSearchResults(searchResults)).toEqual(expected);
  });
});
