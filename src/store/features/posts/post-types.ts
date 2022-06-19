export type PostsState = {
  posts: Post[],
  loading: boolean,
  error: string | null,
};

export enum PostActionType {
  FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
  POSTS_CLEAR_ERROR = 'POSTS_CLEAR_ERROR',
  // NEW_POST = 'NEW_POST',
  // UPDATE_POST = 'UPDATE_POST',
  // DELETE_POST = 'DELETE_POST',
}

export type FetchPostsLoadingAction = {
  type: PostActionType.FETCH_POSTS_LOADING,
};

export type FetchPostsSuccessAction = {
  type: PostActionType.FETCH_POSTS_SUCCESS,
  payload: {
    posts: Post[],
  }
};
export type FetchPostsFailureAction = {
  type: PostActionType.FETCH_POSTS_FAILURE,
  payload: {
    error: string,
  }
};

export type PostsClearErrorAction = {
  type: PostActionType.POSTS_CLEAR_ERROR,
};

// export type CreatNewPostAction = {
//   type: PostActionType.NEW_POST,
//   payload: {
//     post: CreatePost;
//   }
// };

// export type UpdatePostAction = {
//   type: PostActionType.UPDATE_POST,
//   payload: {
//     post: Post;
//   }
// };

// export type DeletePostAction = {
//   type: PostActionType.DELETE_POST,
//   payload: {
//     id: string,
//   }
// };

export type SculpturesAction =
  FetchPostsLoadingAction |
  FetchPostsSuccessAction |
  FetchPostsFailureAction |
  PostsClearErrorAction;
  // CreatNewPostAction |
  // UpdatePostAction |
  // DeletePostAction;
