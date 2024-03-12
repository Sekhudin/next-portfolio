'use client';
import React from 'react';
import LinkComponent from 'next/link';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryPublicationSeriesPosts from 'src/service/hashnode/queries/publication-series-posts';
import { hrefTo } from 'src/utils/component';

import SeriesPostsSection from './series[slug]-section/series-posts-section';
import type { Deps } from 'src/utils';

export const { seriesPostsSectionDeps }: Deps<'seriesPostsSectionDeps', typeof SeriesPostsSection> =
  {
    seriesPostsSectionDeps: {
      LinkComponent: LinkComponent,
      SuspenseComponent: React.Suspense,
      _useQuery: useApollosSuspenseQuery,
      _useState: React.useState,
      _service: HashnodeQueryPublicationSeriesPosts,
      _hrefTo: hrefTo,
    },
  };
