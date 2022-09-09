import React from 'react';
import { useParams } from 'react-router-dom';

import PostInfo from '../../components/PostInfo';

import { useIssue } from '../../hooks/useIssue';
import { PostContent } from './styles';

// import { Container } from './styles';

const Post: React.FC = () => {
  const { number } = useParams();
  const { data, isLoading, error } = useIssue(number!!);
  
  return (
    <>
    {isLoading ? 'Carregando' : error ? 'Erro ao carregar dados!' : (
      <>
      <PostInfo issue={data!!} />
      <PostContent>
        {data?.body!!}
      </PostContent>
      </>
    )}
      
    </>
  );
}

export default Post;