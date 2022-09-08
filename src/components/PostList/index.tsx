import React from 'react';
import PostItem from './PostItem';

import { PostListContainer } from './styles';

const PostList: React.FC = () => {
  return (
    <PostListContainer>
      <PostItem />
      <PostItem />
    </PostListContainer>
  );
}

export default PostList;