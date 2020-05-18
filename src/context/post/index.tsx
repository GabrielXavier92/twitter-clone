import React, { useState, useEffect } from 'react';
import PostService from '../../service/posts';
import { IPost } from '../../interfaces/post';

import PostContext from './state';

const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Array<IPost>>([]);

  const handleCreatePost = (post: IPost) => PostService.createPost(post);

  const handleGetPosts = () => {
    PostService.getPosts().get().then((data) => {
      const newPosts = posts;
      data.docs.map((doc) => newPosts.push(doc.data()));
      setPosts(newPosts);
    });
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  const value = {
    posts,
    handleCreatePost,
    handleGetPosts,
  };

  return (<PostContext.Provider value={value}>{children}</PostContext.Provider>);
};

export default PostProvider;
