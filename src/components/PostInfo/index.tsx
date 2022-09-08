import React from 'react';
import { FaAngleLeft, FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import {
  PostInfoContainer,
  PostInfoHeader,
  PostInfoFooter,
  PostInfoContent,
} from './styles';


const PostInfo: React.FC = () => {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <a href="">
          <FaAngleLeft /> Voltar
        </a>
        <a href="">
          Ver no GitHub
          <FaExternalLinkAlt />
        </a>
      </PostInfoHeader>
      <PostInfoContent>
        <strong>JavaScript data types and data structures</strong>
        <PostInfoFooter>
          <a href="#"><FaGithub/> mtheusbrito</a> 
          <a href="#"><FaCalendarDay/>Há 1 dia</a>
          <a href="#"><FaComment/>5 comentários</a>
        </PostInfoFooter>
      </PostInfoContent>
    </PostInfoContainer>
  );
}

export default PostInfo;