import {  QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import { GitHubProvider } from './context/GitHubContext';
import { queryClient } from './services/queryClient';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHubProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </GitHubProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
