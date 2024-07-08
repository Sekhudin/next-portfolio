'use client';
import React from 'react';
import ErrorBoundary from 'components/boundaries/error.boundary';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PaginationSkeleton,
} from 'packages/ui/pagination';
import { SkeletonList } from 'src/packages/ui/skeleton';
import {
  MemoizeRepositoryCard,
  RepositoryCardSkeleton,
} from 'modules/github/components/cards/repository.card';
import type { WithSkeletonList } from 'packages/utils/cn';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import RepositoriesQuery from 'modules/github/queries/repositories.query';
import { RepositoryOrderField, OrderDirection, RepositoryPrivacy } from 'types/github';

const defaultArgs: QueryArgs = {
  orderBy: {
    field: RepositoryOrderField.UpdatedAt,
    direction: OrderDirection.Desc,
  },
  privacy: RepositoryPrivacy.Public,
  isFork: false,
};

type QueryArgs = ReturnType<typeof RepositoriesQuery.args>;
type RepositoryListProps = QueryArgs & { pageSize: number };
const RepositoryList = ({ pageSize, ...props }: RepositoryListProps) => {
  const [variables, setVariables] = React.useState<QueryArgs>({
    ...defaultArgs,
    ...props,
    first: pageSize,
  });
  const [page, setPage] = React.useState<number>(1);
  const result = useSuspenseQuery(RepositoriesQuery.query, { variables });
  const repositories = React.useMemo(() => RepositoriesQuery.init(result.data), [result.data]);

  const prevHandler = () => {
    if (repositories.pageInfo.startCursor) {
      setPage(page - 1);
      setVariables({
        ...variables,
        first: null,
        after: null,
        last: pageSize,
        before: repositories.pageInfo.startCursor,
      });
    }
  };

  const nextHandler = () => {
    if (repositories.pageInfo.endCursor) {
      setPage(page + 1);
      setVariables({
        ...variables,
        before: null,
        last: null,
        first: pageSize,
        after: repositories.pageInfo.endCursor,
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}>
        {repositories.mapRepos((repository, key) => (
          <MemoizeRepositoryCard key={key} repository={repository} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrev
              isActive={repositories.pageInfo.hasPreviousPage}
              aria-label="Previous Page"
              onClick={prevHandler}
            />
          </PaginationItem>

          <PaginationItem className="text-sm mx-1">
            {repositories.getPageLabel(page, pageSize)}
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              isActive={repositories.pageInfo.hasNextPage}
              aria-label="Next Page"
              onClick={nextHandler}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const RepositoryListSkeleton = ({ nSkeleton }: WithSkeletonList) => (
  <React.Fragment>
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}>
      <SkeletonList nSkeleton={nSkeleton}>
        <RepositoryCardSkeleton />
      </SkeletonList>
    </div>
    <PaginationSkeleton />
  </React.Fragment>
);

type SuspenseProps = RepositoryListProps & WithSkeletonList;
const RepositoryListSuspense = ({ nSkeleton, ...props }: SuspenseProps) => (
  <div className="flex flex-col gap-y-16">
    <ErrorBoundary fallback="Failed to fetch repositories." showToast>
      <React.Suspense fallback={<RepositoryListSkeleton nSkeleton={nSkeleton} />}>
        <RepositoryList {...props} />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default RepositoryListSuspense;
