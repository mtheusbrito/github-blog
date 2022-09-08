import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}
body{
  background-color: ${(props) => props.theme.baseBackground};
  color: ${(props) => props.theme.baseText};
  -webkit-font-smoothing: antialiased;
}

body, input, text-area, button{
  font: 400 1rem Nunito, sans-serif;
  line-height: 160%;
}
`;
