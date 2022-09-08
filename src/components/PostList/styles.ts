import styled from 'styled-components';

export const PostListContainer = styled.div`

  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;


export const PostItemContainer = styled.a`
  padding: 2rem;
  width: 100%;
  background: ${(props) => props.theme.basePost};
  gap: 1.25rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transition: border-color 0.2s;
    border: 1px solid ${(props) => props.theme.baseLabel};
  }

  span {
    display: block; /* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 6.4em;
    color: ${(props) => props.theme.baseText};
  }
`;


export const PostItemHeader = styled.div`
  display: flex;
  gap: 1rem;
  strong {
    flex: 1;
    color: ${(props) => props.theme.white};
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseSpan};
  }
`;