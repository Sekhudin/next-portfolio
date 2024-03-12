'use client';
import React from 'react';
import LinkComponent from 'next/link';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeQueryPublicationSeriesList from 'src/service/hashnode/queries/publication-series-list';
import { hrefTo } from 'src/utils/component';

import SeriesListSection from './series-section/series-list-section';
import type { Deps } from 'src/utils';

export const { seriesListSectionDeps }: Deps<'seriesListSectionDeps', typeof SeriesListSection> = {
  seriesListSectionDeps: {
    LinkComponent: LinkComponent,
    SuspenseComponent: React.Suspense,
    _useQuery: useApollosSuspenseQuery,
    _useState: React.useState,
    _hrefTo: hrefTo,
    _service: HashnodeQueryPublicationSeriesList,
  },
};
