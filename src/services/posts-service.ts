import { CreatePost, Post } from '../types';
import ApiService, { formatError } from './api-service';

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await ApiService.get<{ posts: Post[] }>('/api/posts');
    return data.posts;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const deletePost = async (id: string, token: string) => {
  try {
    const { data } = await ApiService.delete<{ post: Post }>(`/api/posts/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data.post;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const createNewPost = async (post: CreatePost, token: string) => {
  try {
    const { data } = await ApiService.post<{ post: Post }>(
      'api/posts/',
      post,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.post;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const updatePost = async (post: Post, token: string) => {
  try {
    const { data } = await ApiService.patch<{ post: Post }>(
      `api/posts/${post.id}`,
      {
        petName: post.petName,
        author: post.author,
        description: post.description,
        picURL: post.picURL,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.post;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const PostService = {
  fetchPosts,
  deletePost,
  createNewPost,
  updatePost,
};

export default PostService;
