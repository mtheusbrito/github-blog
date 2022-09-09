import { useQuery } from 'react-query';
import { useContextSelector } from 'use-context-selector';
import { Issue } from '../@types';
import { GitHubContext } from '../context/GitHubContext';


async function getIssue(
  number: string,
  fetchIssue: (number: string) => Promise<Issue>
) {
  const data = await fetchIssue(number);
  return data;
}
export function useIssue(number: string) {
  const fetchIssue = useContextSelector(GitHubContext, (context) => {
    return context.fetchIssue;
  });
  return useQuery(['issue'], () => getIssue(number, fetchIssue));
}
