'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryMe from 'src/service/hashnode/queries/me';
import HashnodeQueryPosts from 'src/service/hashnode/queries/posts';
import { hrefTo } from 'src/utils/component';

import type ProfileSection from './section/profile-section';
import type PostSection from './section/posts-section';
import type { Deps } from 'src/utils';

export const { profileSectionDeps }: Deps<'profileSectionDeps', typeof ProfileSection> = {
  profileSectionDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: HashnodeQueryMe,
    SuspenseComponent: React.Suspense,
  },
};

export const { postSectionDeps }: Deps<'postSectionDeps', typeof PostSection> = {
  postSectionDeps: {
    _useQuery: useApollosSuspenseQuery,
    _useState: React.useState,
    _useRouter: useRouter,
    _service: HashnodeQueryPosts,
    _hrefTo: hrefTo,
    SuspenseComponent: React.Suspense,
  },
};
