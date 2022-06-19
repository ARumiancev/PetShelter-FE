import { Dispatch } from 'react';
import { AppAction, RootState } from '../../redux-types';
import { PostActionType, PostsAction } from './post-types';

export const createfetchPostsLoadingAction: PostsAction = ({
  type: PostActionType.FETCH_POSTS_LOADING,
});

export const createFecthPostsSuccessAction = (posts: Post[]): PostsAction => ({
  type: PostActionType.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const createFecthPostsFailureAction = (error: string): PostsAction => ({
  type: PostActionType.FETCH_POSTS_FAILURE,
  payload: { error },
});

export const postsClearErrorAction: PostsAction = ({
  type: PostActionType.POSTS_CLEAR_ERROR,
});

export const createfetchPostsAction = async (dispatch: Dispatch<AppAction>) => {
  dispatch(createfetchPostsLoadingAction);
  try {
    const postsItems = await PostService.fetchPosts();
    dispatch(createFecthPostsSuccessAction(postsItems));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthPostsFailureAction = createFecthPostsFailureAction(errMsg);
    dispatch(fecthPostsFailureAction);
  }
};

export const createNewPostAction = (post: CreatePost) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('You need to be logged in');
  }
  await PostService.createNewPost(post, token);
  createfetchPostsAction(dispatch);
};

export const createUpdateSculptureAction = (sculpture: Sculpture) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await SculptureService.updateSculpture(sculpture, token);
  createfetchSculpturesAction(dispatch);
};

export const createDeleteSculptureAction = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await SculptureService.deleteSculpture(id, token);
  createfetchSculpturesAction(dispatch);
};
