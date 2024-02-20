'use client';
import React from 'react';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import GithubQueryMe from 'src/service/github/queries/me';
import GithubQueryRepos from 'src/service/github/queries/repositories';
import { hrefTo, toast } from 'src/utils/component';

import type ProfileSection from './section/profile-section';
import type ProjectSection from './section/projects-section';
import type { Deps } from 'src/utils';

export const { profileSectionDeps }: Deps<'profileSectionDeps', typeof ProfileSection> = {
  profileSectionDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: GithubQueryMe,
    SuspenseComponent: React.Suspense,
  },
};

export const { projectSectionDeps }: Deps<'projectSectionDeps', typeof ProjectSection> = {
  projectSectionDeps: {
    _useQuery: useApollosSuspenseQuery,
    _useState: React.useState,
    _service: GithubQueryRepos,
    _hrefTo: hrefTo,
    _toast: toast,
    SuspenseComponent: React.Suspense,
  },
};
