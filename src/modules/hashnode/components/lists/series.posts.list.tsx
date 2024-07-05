'use client';
import React from 'react';
import CircleLoader from 'components/shared/circle.loader';
import ConditionalContainer from 'components/containers/conditional.container';
import ErrorBoundary from 'components/boundaries/error.boundary';
import {
  MemoizePostCard,
  PostCardSkeleton,
  NoArticleYet,
} from 'modules/hashnode/components/cards/post.card';
import { cn, Props, WithSkeletonList, Children } from 'packages/utils/cn';
import useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import useStack from 'packages/hooks/use-stack';
import useUpdated from 'packages/hooks/use-updated';
import useQuery from 'packages/hooks/use-query';
import seriesPostsQuery from 'modules/hashnode/queries/series-posts.query';

type SeriesPostsListProps = Props<
  { fallback: Children } & ReturnType<typeof seriesPostsQuery.args>
>;
const SeriesPostsList = ({ className, fallback, ...variables }: SeriesPostsListProps) => {
  const result = useQuery(seriesPostsQuery.query, { variables });
  const series = React.useMemo(() => seriesPostsQuery.init(result.data), [result.data]);
  const seriesStack = useStack(series?.getPosts());
  const refEntry = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(refEntry);

  useUpdated(() => {
    if (entry && entry.isIntersecting) {
      if (series && series.posts.pageInfo.hasNextPage) {
        result.fetchMore({
          updateQuery(previous, { fetchMoreResult }) {
            const publication = seriesPostsQuery.combine(previous, fetchMoreResult);
            return { publication };
          },
          variables: {
            after: series.posts.pageInfo.endCursor,
          },
        });
      }
    }
  }, [entry]);

  useUpdated(() => {
    if (series?.posts.edges) {
      seriesStack.initItems(series.posts.edges);

      if (refEntry.current && !series.posts.pageInfo.hasNextPage) {
        refEntry.current.style.display = 'none';
      }
    }
  }, [series?.posts.edges]);

  return (
    <React.Fragment>
      <div className={cn('flex flex-col gap-y-10')}>
        <React.Fragment>
          {seriesStack.items.map(({ node }, key) => (
            <MemoizePostCard key={key} post={node} showCover={false} />
          ))}
          <ConditionalContainer isVisible={!result.loading && !seriesStack.items.length}>
            <NoArticleYet />
          </ConditionalContainer>
        </React.Fragment>
      </div>

      <ConditionalContainer isVisible={result.loading}>{fallback}</ConditionalContainer>
      <CircleLoader ref={refEntry} className="flex justify-center" />
    </React.Fragment>
  );
};

const MySeriesPostListSkeleton = ({ nSkeleton }: WithSkeletonList) => (
  <div className="flex flex-col gap-y-16">
    <PostCardSkeleton nSkeleton={nSkeleton} />
  </div>
);

type SuspenseProps = Props<ReturnType<typeof seriesPostsQuery.args> & WithSkeletonList>;
const SeriesPostsListSuspense = ({ nSkeleton, ...props }: SuspenseProps) => (
  <ErrorBoundary fallback="Failed to fetch series posts." showToast>
    <React.Fragment>
      <SeriesPostsList fallback={<MySeriesPostListSkeleton nSkeleton={nSkeleton} />} {...props} />
    </React.Fragment>
  </ErrorBoundary>
);
export default SeriesPostsListSuspense;
