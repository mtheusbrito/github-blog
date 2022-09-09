import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.baseProfile};
  display: flex;
  flex-direction: row;
  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  img {
    width: 148px;
    border-radius: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.baseTitle};
  }
  a {
    align-items: baseline;
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: border-bottom 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;
export const Content = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 0.5rem;
  }
`;
export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
  span {
    font-size: 1rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseSubTitle};

    svg {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;
