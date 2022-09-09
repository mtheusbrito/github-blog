import React from 'react';
import ReactMarkdown from 'react-markdown'
import { PostItemContainer, PostItemHeader } from '../styles';
interface Issue {
  active_lock_reason: string;
  assignee: string;
  author_association: string;
  body: string;
  closed_at: string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels_url: string;
  locked: boolean;
  milestone: string;
  node_id: string;
  number: number;
  performed_via_github_app: string;
  repository_url: string;
  score: number;
  state: string;
  state_reason: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
}
interface PostItemProps {
  issue: Issue;
}

const PostItem: React.FC<PostItemProps> = ({issue}) => {
  return (
    <PostItemContainer to={`/${issue.number}`}>
      <PostItemHeader>
        <strong>{issue.title} </strong>
        <span>Há 1 dia</span>
      </PostItemHeader>
      <span>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </span>
    </PostItemContainer>
  );
};

export default PostItem;