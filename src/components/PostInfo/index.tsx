import React from 'react';
import { FaAngleLeft, FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Issue } from '../../@types';
import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns'
import {
  PostInfoContainer,
  PostInfoHeader,
  PostInfoFooter,
  PostInfoContent,
} from './styles';

interface PostInfoProps{
  issue: Issue
}
const PostInfo: React.FC<PostInfoProps> = ({issue}) => {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to={'/'}>
          <FaAngleLeft /> Voltar
        </Link>
        <a href={`${issue.html_url}`}>
          Ver no GitHub
          <FaExternalLinkAlt />
        </a>
      </PostInfoHeader>
      <PostInfoContent>
        <strong>{issue.title}</strong>
        <PostInfoFooter>
          <span>
            <FaGithub /> {issue.user.login}
          </span>
          <span>
            <FaCalendarDay />
            {formatDistanceToNow(new Date(issue.created_at), {
              addSuffix: true,
              locale: ptBR
            })}
          </span>
          <span>
            <FaComment />{issue.comments} {issue.comments === 1 ? 'comentário': 'comentários'}
          </span>
        </PostInfoFooter>
      </PostInfoContent>
    </PostInfoContainer>
  );
}

export default PostInfo;