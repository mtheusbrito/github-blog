import React from 'react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { GitHubContext } from '../../context/GitHubContext';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newSearchFormSchema = zod.object({
  query: zod.string(),
});

type NewSearchFormData = zod.infer<typeof newSearchFormSchema>;

const SearchForm: React.FC = () => {
  
  const {issues, fetchIssues} = useContextSelector(GitHubContext, (context) => {
    return context;
  });

  

  const { register, handleSubmit, formState:{ isSubmitting} } = useForm<NewSearchFormData>({
    resolver: zodResolver(newSearchFormSchema),
    defaultValues:{
      query: ''  
    }
  });

  

  async function handleSearchIssue(e: any) {
    await fetchIssues(e.query);
  }
  return (
    <SearchFormContainer>
      <span>
        <strong>Publicações</strong> {issues.length}{issues.length === 1 ? ` publicação` : ' publicações'} 
      </span>
      <form onSubmit={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </form>
    </SearchFormContainer>
  );
};

export default SearchForm;
