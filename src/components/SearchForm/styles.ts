import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;
  span {
    display: flex;
    strong {
      font-size: 1.125rem;
      margin-right: auto;
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      border: 0;
      width: 100%;
      padding: 0.75rem 1rem;
      background: ${(props) => props.theme.baseInput};

      border-radius: 6px;
      border: 1px solid ${(props) => props.theme.baseBorder};
      color: ${(props) => props.theme.baseLabel};
      &::placeholder {
        color: ${(props) => props.theme.baseLabel};
      }
      &:hover {
        color: ${(props) => props.theme.baseText};
      }
    }
  }
`;
