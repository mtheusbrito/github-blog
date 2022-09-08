import React from 'react';
import PostList from '../../components/PostList';
import Profile from '../../components/Profile';
import SearchForm from '../../components/SearchForm';
import { Container } from './styles';



const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchForm />

      <Container>
        <PostList />
      </Container>
    </>
  );
}

export default Home;