import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa';
import { ProfileContainer, Header, Content, Footer } from './styles';
import { useContextSelector } from 'use-context-selector';
import { GitHubContext } from '../../context/GitHubContext';

const Profile: React.FC = () => {
  const user = useContextSelector(GitHubContext, (context) => {
    return context.user;
  })
  return (
    <ProfileContainer>
      <img src="https://github.com/mtheusbrito.png"></img>
      <Content>
        <Header>
          <strong>{user.name}</strong>
          <a href={user.html_url} target="_blank">
            GitHub <FaExternalLinkAlt />{' '}
          </a>
        </Header>

        <span dangerouslySetInnerHTML={{ __html: `${user.bio}` }}></span>
        <Footer>
          <span>
            <FaGithub />
            {user.login}
          </span>
          <span>
            <FaBuilding />
            {user.company}
          </span>
          <span>
            <FaUserFriends />
            47 seguidores
          </span>
        </Footer>
      </Content>
    </ProfileContainer>
  );
};

export default Profile;
