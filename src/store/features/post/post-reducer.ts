/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import {
  PostActionType,
  PostsAction,
  PostsState,
} from './post-types';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer: Reducer<PostsState, PostsAction> = (state = initialState, action) => {
  switch (action.type) {
    case PostActionType.FETCH_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case PostActionType.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };
    }

    case PostActionType.FETCH_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case PostActionType.POSTS_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case PostActionType.NEW_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            ...action.payload.post,
            id: createId(),
          },
        ],
      };

    case PostActionType.UPDATE_POST: {
      const index = state.posts.findIndex((post) => post.id === action.payload.post.id);
      const newPosts = [...state.posts];
      newPosts[index] = action.payload.post;
      return {
        ...state,
        posts: newPosts,
      };
    }

    case PostActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((posts) => posts.id !== action.payload.id),
      };

    default: return state;
  }
};
export default postsReducer;
