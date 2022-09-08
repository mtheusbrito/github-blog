import React from 'react';
import { SearchFormContainer } from './styles';

// import { Container } from './styles';

const SearchForm: React.FC = () => {
  return (
    <SearchFormContainer>
      <span>
        <strong>Publicações</strong> 6 publicações
      </span>
      <form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  );
}

export default SearchForm;