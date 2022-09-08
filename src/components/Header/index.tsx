import React from 'react';
import banner from '../../assets/banner.svg';
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return <HeaderContainer banner={banner}>
    <img src={logo} alt="GitHub Blog" />
  </HeaderContainer>;
}

export default Header;