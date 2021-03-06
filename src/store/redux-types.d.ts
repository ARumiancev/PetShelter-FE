import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { NavigationState, NavigationAction } from './features/navigation/navigation-types';
import { PostsState, PostsAction } from './features/post/post-types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState,
  posts: PostsState,
};

export type AppAction = AuthAction | NavigationAction | PostsAction;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
