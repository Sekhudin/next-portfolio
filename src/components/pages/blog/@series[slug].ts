'use client';
import React from 'react';
import LinkComponent from 'next/link';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryPublicationSeries from 'src/service/hashnode/queries/posts-series';
import { hrefTo } from 'src/utils/component';

import SeriesPostsSection from './series[slug]-section/series-posts-section';
import type { Deps } from 'src/utils';

export const { seriesPostsSectionDeps }: Deps<'seriesPostsSectionDeps', typeof SeriesPostsSection> =
  {
    seriesPostsSectionDeps: {
      _useQuery: useApollosSuspenseQuery,
      _useState: React.useState,
      _service: HashnodeQueryPublicationSeries,
      _hrefTo: hrefTo,
      SuspenseComponent: React.Suspense,
      LinkComponent,
    },
  };
