import { combineReducers } from 'redux';
import { user } from './User/reducers';
import { destinations } from './BucketList/reducers';
import { preferences } from './Preferences/reducers';

export default combineReducers({
  user,
  destinations,
  preferences
});
