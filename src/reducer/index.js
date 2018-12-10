import { combineReducers } from 'redux';

import ui from './ui';
import users from './users';

const userReducer = combineReducers({
  users,
  ui
});

export default userReducer;
