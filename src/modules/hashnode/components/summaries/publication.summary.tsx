'use client';
import React from 'react';
import { H1 } from 'components/typography/h';
import { P } from 'components/typography/p';
import ConditionalContainer from 'components/containers/conditional.container';
import ErrorBoundary from 'components/boundaries/error.boundary';
import { SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import { Separator } from 'packages/ui/separator';
import type { Props } from 'packages/utils/cn';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import publicationQuery from 'modules/hashnode/queries/publication.query';

type PublicationSummaryProps = Props<ReturnType<typeof publicationQuery.args>>;
const PublicationSummary = ({ className, ...variables }: PublicationSummaryProps) => {
  const result = useSuspenseQuery(publicationQuery.query, { variables });
  const publication = React.useMemo(() => publicationQuery.init(result.data), [result.data]);

  return (
    <React.Fragment>
      <H1 className="md:w-10/12 lg:w-9/12 flex space-x-1">{publication.title}</H1>
      <ConditionalContainer isVisible={publication.about?.text}>
        <P className="md:w-10/12">{publication.about?.text}</P>
      </ConditionalContainer>
    </React.Fragment>
  );
};

const PublicationSummarySkeleton = () => (
  <React.Fragment>
    <SkeletonText className="w-7/12 lg:w-4/12" size="h1" />
    <SkeletonParagraph className="mt-4" n={2} diffLast />
  </React.Fragment>
);

type SuspenseProps = Props<PublicationSummaryProps>;
const PublicationSummarySuspense = ({ className, ...props }: SuspenseProps) => (
  <div className={className}>
    <ErrorBoundary fallback="Failed to fetch summary">
      <React.Suspense fallback={<PublicationSummarySkeleton />}>
        <PublicationSummary {...props} />
      </React.Suspense>
    </ErrorBoundary>
    <Separator className="my-6" orientation="horizontal" />
  </div>
);
export default PublicationSummarySuspense;
