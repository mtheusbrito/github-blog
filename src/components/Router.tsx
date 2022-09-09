import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import DefaultLayout from '../styles/layouts/DefaultLayout';

// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:number" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default Router;