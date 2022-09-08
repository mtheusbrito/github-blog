import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa';
import { ProfileContainer, Header, Content, Footer } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <img src="https://github.com/mtheusbrito.png"></img>
      <Content>
        <Header>
          <strong>Matheus Brito</strong>
          <a href="#">GitHub <FaExternalLinkAlt/> </a>
        </Header>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <Footer>
          <a href="">
            <FaGithub />
            mtheusbrito
          </a>
          <a href="">
            <FaBuilding /> 
            Afya
          </a>
          <a href=''><FaUserFriends/>47 seguidores</a>
        </Footer>
      </Content>
    </ProfileContainer>
  );
};

export default Profile;
