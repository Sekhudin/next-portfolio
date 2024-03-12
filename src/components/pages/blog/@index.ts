'use client';
import React from 'react';
import LinkComponent from 'next/link';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryMe from 'src/service/hashnode/queries/me';
import HashnodeQueryMePosts from 'src/service/hashnode/queries/me-posts';
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
    LinkComponent: LinkComponent,
    SuspenseComponent: React.Suspense,
    _useQuery: useApollosSuspenseQuery,
    _useState: React.useState,
    _service: HashnodeQueryMePosts,
    _hrefTo: hrefTo,
  },
};
