import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';
import { LayoutContainer, Content } from './styles';


const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
}

export default DefaultLayout;