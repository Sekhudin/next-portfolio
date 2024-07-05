'use client';
import React from 'react';
import ConditionalContainer from 'components/containers/conditional.container';
import CircleLoader from 'components/shared/circle.loader';
import ErrorBoundary from 'components/boundaries/error.boundary';
import {
  MemoizeSeriesCard,
  SeriesCardSkeleton,
  NoSeriesYet,
} from 'modules/hashnode/components/cards/series.card';
import type { Props, WithSkeletonList, Children } from 'packages/utils/cn';
import useUpdated from 'packages/hooks/use-updated';
import useStack from 'packages/hooks/use-stack';
import useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import useQuery from 'packages/hooks/use-query';
import seriesListQuery from 'modules/hashnode/queries/series-list.query';

type SeriesListProps = ReturnType<typeof seriesListQuery.args>;
const SeriesList = ({ fallback, ...variables }: SeriesListProps & { fallback: Children }) => {
  const result = useQuery(seriesListQuery.query, { variables });

  const seriesList = React.useMemo(() => seriesListQuery.init(result.data), [result.data]);
  const seriesListStack = useStack(seriesList?.edges);

  const refEntry = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(refEntry);

  useUpdated(() => {
    if (entry && entry.isIntersecting) {
      if (seriesList && seriesList.pageInfo.hasNextPage) {
        result.fetchMore({
          updateQuery(previous, { fetchMoreResult }) {
            const publication = seriesListQuery.combine(previous, fetchMoreResult);
            return { publication };
          },
          variables: {
            after: seriesList.pageInfo.endCursor,
          },
        });
      }
    }
  }, [entry]);

  useUpdated(() => {
    if (seriesList) {
      seriesListStack.initItems(seriesList.edges);

      if (refEntry.current && !seriesList.pageInfo.hasNextPage) {
        refEntry.current.style.display = 'none';
      }
    }
  }, [seriesList]);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-y-6 mb-12">
        {seriesListStack.items.map(({ node }, key) => (
          <MemoizeSeriesCard key={key} series={node} />
        ))}

        <ConditionalContainer isVisible={!result.loading && !seriesListStack.items.length}>
          <NoSeriesYet />
        </ConditionalContainer>
      </div>

      <ConditionalContainer isVisible={result.loading}>{fallback}</ConditionalContainer>
      <CircleLoader ref={refEntry} className="flex justify-center" />
    </React.Fragment>
  );
};

type SuspenseProps = Props<SeriesListProps & WithSkeletonList>;
const SeriesListSuspense = ({ nSkeleton, ...props }: SuspenseProps) => (
  <ErrorBoundary fallback="Failed to fetch series list." showToast>
    <SeriesList
      fallback={<SeriesCardSkeleton className="mt-6 mb-12" nSkeleton={nSkeleton} />}
      {...props}
    />
  </ErrorBoundary>
);
export default SeriesListSuspense;
