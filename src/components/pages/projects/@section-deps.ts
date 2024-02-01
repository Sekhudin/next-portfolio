'use client';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import GithubMeProfile from 'src/components/shared/github/me';
import GithubRepoList from 'src/components/shared/github/project-list';


import GithubQueryMe from 'src/service/github/queries/me';
import GithubQueryRepos from 'src/service/github/queries/repositories';
import { hrefTo, toast } from 'src/utils/component';
import type { Deps } from 'src/utils';

export const { githubQueryMeDeps }: Deps<'githubQueryMeDeps', typeof GithubMeProfile> = {
  githubQueryMeDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: GithubQueryMe,
  },
};

export const { githubQueryReposDeps }: Deps<'githubQueryReposDeps', typeof GithubRepoList> = {
  githubQueryReposDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: GithubQueryRepos,
    _hrefTo: hrefTo,
    _toast: toast,
  },
};
