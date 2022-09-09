import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { GitHubContext } from '../../context/GitHubContext';
import PostItem from './PostItem';

import { PostListContainer } from './styles';

const PostList: React.FC = () => {
  const issues = useContextSelector(GitHubContext, (context)=>{
    return context.issues
  })
  return (
    <PostListContainer>
      {issues.map((issue)=>{
        return <PostItem  issue={issue} key={issue.id}/>;
      })}
      
     
    </PostListContainer>
  );
}

export default PostList;