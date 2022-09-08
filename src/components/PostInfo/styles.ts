import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  gap: 1.25rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  
  
  
`;

export const PostInfoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    display: flex;
    gap: 0.5rem;
    align-items: baseline;
    flex-direction: row;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: border-bottom 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const PostInfoFooter = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
  a {
    font-size: 1rem;
    text-decoration: none;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseSpan};

    svg {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;
export const PostInfoContent = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
  strong {
    
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
  }
`;
