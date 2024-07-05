'use client';
import React from 'react';
import { P } from 'components/typography/p';
import LabelTag from 'components/tags/label.tag';
import ConditionalContainer, { StripFragment } from 'components/containers/conditional.container';
import ErrorBoundary from 'components/boundaries/error.boundary';
import { SkeletonText } from 'packages/ui/skeleton';
import Str from 'packages/utils/string';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import seriesPostsTagsQuery from 'modules/hashnode/queries/series-posts-tags.query';

const MemoizeLabelTag = React.memo(LabelTag);
type SeriesPostsTagsListProps = ReturnType<typeof seriesPostsTagsQuery.args>;
const SeriesPostsTagsList = ({ ...variables }: SeriesPostsTagsListProps) => {
  const result = useSuspenseQuery(seriesPostsTagsQuery.query, { variables });
  const series = React.useMemo(() => seriesPostsTagsQuery.init(result.data), [result.data]);

  return (
    <ConditionalContainer isVisible={series} fallback={<StripFragment />}>
      {series &&
        series.mapUniqueTags((tag, key) => (
          <MemoizeLabelTag key={key}>{Str(tag.name).asTag()}</MemoizeLabelTag>
        ))}
    </ConditionalContainer>
  );
};

const SeriesPostsTagsListSkeleton = () => (
  <React.Fragment>
    <SkeletonText className="w-20" rounded="md" />
    <SkeletonText className="w-20" rounded="md" />
    <SkeletonText className="w-20" rounded="md" />
  </React.Fragment>
);

type SuspenseProps = SeriesPostsTagsListProps;
const SeriesPostsTagsListSuspense = ({ ...props }: SuspenseProps) => (
  <div className="flex space-x-2 my-6">
    <div>
      <P className="font-semibold dark:font-semibold">Tags:</P>
    </div>

    <div className="w-11/12 flex flex-wrap gap-x-1 gap-y-2 px-2 py-1">
      <ErrorBoundary fallback="Failed to fetch tags.">
        <React.Suspense fallback={<SeriesPostsTagsListSkeleton />}>
          <SeriesPostsTagsList {...props} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  </div>
);

export default SeriesPostsTagsListSuspense;
