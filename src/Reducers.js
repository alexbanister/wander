import { combineReducers } from 'redux';
import { user, isLoggedIn } from './User/reducers';
import { destinations } from './BucketList/reducers';
import { preferences } from './Preferences/reducers';
import { searchResults, resultsUpdated } from './Search/reducers';

export default combineReducers({
  user,
  isLoggedIn,
  destinations,
  preferences,
  searchResults,
  resultsUpdated
});
