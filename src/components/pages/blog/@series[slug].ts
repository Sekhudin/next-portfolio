'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryPostsSeries from 'src/service/hashnode/queries/posts-series';
import { hrefTo } from 'src/utils/component';

import SeriesPostsSection from './series[slug]-section/series-posts-section';
import type { Deps } from 'src/utils';

export const { seriesPostsSectionDeps }: Deps<'seriesPostsSectionDeps', typeof SeriesPostsSection> =
  {
    seriesPostsSectionDeps: {
      _useQuery: useApollosSuspenseQuery,
      _useState: React.useState,
      _useRouter: useRouter,
      _service: HashnodeQueryPostsSeries,
      _hrefTo: hrefTo,
      SuspenseComponent: React.Suspense,
    },
  };
