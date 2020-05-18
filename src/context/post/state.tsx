import { createContext } from 'react';
import { IPost } from '../../interfaces/post';

interface IPostContext {
  posts: Array<IPost>;
  handleGetPosts: Function;
  handleCreatePost: Function;
}

export default createContext<IPostContext>({
  posts: [],
  handleGetPosts: () => false,
  handleCreatePost: () => false,
});
