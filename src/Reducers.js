import { combineReducers } from 'redux';
import { user } from './LogIn/reducers';
import { newUser } from './SignUp/reducers';
import { destinations } from './BucketList/reducers';

export default combineReducers({
  user,
  newUser,
  destinations
});
