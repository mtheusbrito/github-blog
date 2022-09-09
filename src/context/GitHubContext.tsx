import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { Issue, User } from '../@types';
import { api } from '../services/api';

interface IssueResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}

interface GitHubContextType {
  user: User;
  issues: Issue[];
  fetchIssue: (number: string) => Promise<Issue>;
  fetchIssues: (query?: string)=> Promise<void>;
}

interface GitHubProviderProps {
  children: ReactNode;
}

export const GitHubContext = createContext<GitHubContextType>(
  {} as GitHubContextType
);

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetchUser();
    fetchIssues();
  }, []);

  const fetchUser = useCallback(async function () {
    const { data } = await api.get<User>('/users/mtheusbrito');

    setUser((state) => ({
      ...state,
      ...data,
      bio: data.bio.replace('\r\n', '<br>'),
    }));
    console.log(data);
  }, []);

  const fetchIssues = useCallback(async function (query?: string) {
    const { data } = await api.get<IssueResponse>(`/search/issues`, {
      params: {
        q: `${query || ''}repo:mtheusbrito/github-blog`,
      },
    });

    setIssues(data.items);
  }, []);

  async function fetchIssue(number: string): Promise<Issue> {
    const { data } = await api.get<Issue>(
      `/repos/mtheusbrito/github-blog/issues/${number}`
    );
    return data;
  }

  return (
    <GitHubContext.Provider value={{ user, issues, fetchIssue, fetchIssues }}>
      {children}
    </GitHubContext.Provider>
  );
}
