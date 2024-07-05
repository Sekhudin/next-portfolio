'use client';
import React from 'react';
import Image from 'components/images/base.image';
import { H1 } from 'components/typography/h';
import { P } from 'components/typography/p';
import ErrorBoundary from 'components/boundaries/error.boundary';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import type { Props } from 'packages/utils/cn';
import Str from 'packages/utils/string';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import seriesQuery from 'modules/hashnode/queries/series.query';

const MemoizeImage = React.memo(Image);
const MemoizeP = React.memo(P);
type SeriesSummaryProps = ReturnType<typeof seriesQuery.args>;
const SeriesSummary = ({ ...variables }: SeriesSummaryProps) => {
  const result = useSuspenseQuery(seriesQuery.query, { variables });
  const series = React.useMemo(() => seriesQuery.init(result.data), [result.data]);

  return (
    <React.Fragment>
      {series && (
        <React.Fragment>
          <div className="relative rounded-lg overflow-hidden">
            <MemoizeImage
              className="w-full h-dvh min-h-60 max-h-60 sm:max-h-72 lg:max-h-96"
              src={series.coverImage}
            />
            <div className="absolute bottom-2 right-2 bg-indigo-700 px-2 py-1 rounded-md text-zinc-50">
              <MemoizeP className="text-xs text-zinc-50">{series.getTotalArticles()}</MemoizeP>
            </div>
          </div>
          <MemoizeP className="md:w-10/12">{series.getDescriptionText()}</MemoizeP>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const SeriesSummarySkeleton = () => (
  <React.Fragment>
    <Skeleton className="relative w-full h-dvh min-h-60 max-h-60 sm:max-h-72 lg:max-h-96 rounded-lg">
      <SkeletonText className="absolute bottom-2 right-2 w-20 px-2 py-1 rounded-lg" size="xs" />
    </Skeleton>
    <SkeletonParagraph className="mt-6" n={2} diffLast />
  </React.Fragment>
);

const SeriesSummarySuspense = ({ className, slug, ...props }: Props<SeriesSummaryProps>) => {
  return (
    <div className={className}>
      <H1 className="md:w-10/12 lg:w-9/12 flex space-x-1 capitalize">
        <span className="text-indigo-700">Series:</span>
        <span>{Str(slug).formatSlug()}</span>
      </H1>

      <div className="flex flex-col mt-6">
        <ErrorBoundary fallback="Failed to fetch summary.">
          <React.Suspense fallback={<SeriesSummarySkeleton />}>
            <SeriesSummary slug={slug} {...props} />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default SeriesSummarySuspense;
