import { RootState } from '../../redux-types';

export const selectPostsLoading = (state: RootState) => state.posts.loading;

// export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPosts = (state: RootState) => state.posts.posts;

export const selectPostById = (id?: string) => (state: RootState) => (id
  ? state.posts.posts.find((post) => id === post.id)
  : undefined);

export const selectPostsError = (state: RootState) => state.posts.error;
