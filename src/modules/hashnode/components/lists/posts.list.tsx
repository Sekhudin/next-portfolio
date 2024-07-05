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
import {
  MemoizePostCard,
  PostCardSkeleton,
  NoArticleYet,
} from 'modules/hashnode/components/cards/post.card';
import type { Props, WithSkeletonList } from 'packages/utils/cn';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import myPostsQuery from 'modules/hashnode/queries/my-posts.query';

const PostsList = ({ className, ...args }: Props<ReturnType<typeof myPostsQuery.args>>) => {
  const [variables, setVariables] = React.useState(args);
  const result = useSuspenseQuery(myPostsQuery.query, { variables });

  const posts = React.useMemo(() => myPostsQuery.init(result.data), [result.data]);

  const prevHandler = () => {
    if (posts.pageInfo.previousPage) {
      setVariables({
        ...variables,
        page: posts.pageInfo.previousPage,
      });
    }
  };

  const nextHandler = () => {
    if (posts.pageInfo.nextPage) {
      setVariables({
        ...variables,
        page: posts.pageInfo.nextPage,
      });
    }
  };

  if (posts.isEmpty()) {
    return (
      <React.Fragment>
        <NoArticleYet className={`grow min-h-48 flex justify-center items-center`} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="min-h-96 flex flex-col gap-y-10 mb-12">
        {posts.mapPosts((post, key) => (
          <MemoizePostCard key={key} post={post} showCover />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrev
              isActive={posts.hashPreviousPage()}
              aria-label="Previous Page"
              onClick={prevHandler}
            />
          </PaginationItem>

          <PaginationItem className="text-sm mx-1">
            {posts.getPageLabel(variables.pageSize)}
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              isActive={posts.hashNextPage()}
              aria-label="Next Page"
              onClick={nextHandler}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </React.Fragment>
  );
};

const PostslistSkeleton = ({ nSkeleton }: WithSkeletonList) => (
  <React.Fragment>
    <div className="min-h-96 flex flex-col gap-y-10 mb-12">
      <PostCardSkeleton nSkeleton={nSkeleton} />
    </div>
    <PaginationSkeleton />
  </React.Fragment>
);

type SuspenseProps = Props<ReturnType<typeof myPostsQuery.args> & WithSkeletonList>;
const PostsListSusppense = ({ nSkeleton, ...args }: SuspenseProps) => (
  <div className="flex flex-col gap-y-16">
    <ErrorBoundary fallback="Failed to fetch posts." showToast>
      <React.Suspense fallback={<PostslistSkeleton nSkeleton={nSkeleton} />}>
        <PostsList {...args} />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default PostsListSusppense;
