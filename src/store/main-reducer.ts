import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import postsReducer from './features/post/post-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  posts: postsReducer,
});

export default mainReducer;
