'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
} from 'src/components/ui/pagination';
import { SkeletonTextSM } from 'src/components/ui/skeleton';
import InputSearch from 'src/components/atoms/input/search';
import { Small } from 'src/components/atoms/typography/p';
import useQuery from 'src/hooks/use-suspense-query';
import GET_POSTS, { Post, UserPostsSort, Args_POST } from 'src/service/hashnode/queries/post';
import Pg from 'src/utils/pagination';
import { cn, PropsWithClassName, PropsWithChildren } from 'src/utils';
import PostCard, { PostCardFallback } from './post-card';

type PostListprops = PropsWithClassName<Omit<Args_POST, 'sortBy'>>;

const args: Args_POST = {
  page: 1,
  pageSize: 1,
  sortBy: UserPostsSort.DatePublishedAsc,
};

const PostMessage = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`grow min-h-48 flex justify-center items-center`, className)}>
    <Small>{children}</Small>
  </div>
);

const PostList = ({ className, ...v }: PostListprops = { className: '', ...args }) => {
  const [page, setPage] = React.useState<number>(v.page);
  const [pageSize, setPageSize] = React.useState<number>(v.pageSize);
  const [sortBy, setSortBy] = React.useState<UserPostsSort>(UserPostsSort.DatePublishedAsc);
  const { data } = useQuery(GET_POSTS, {
    variables: { page, pageSize, sortBy },
  });

  const { nodes, pageInfo, totalDocuments } = Post.flatten(data);

  const prevHandler = () => {
    if (pageInfo.previousPage) {
      setPage(pageInfo.previousPage);
    }
  };

  const nextHandler = () => {
    if (pageInfo.nextPage) {
      setPage(pageInfo.nextPage);
    }
  };

  if (!nodes || nodes.length < 1) {
    return <PostMessage>No article yet</PostMessage>;
  }

  return (
    <div className={cn(`grow`, className)}>
      <div className="md:max-w-xl mb-10">
        <InputSearch placeholder="Search articles" disabled />
      </div>

      <div className={cn('flex flex-col gap-y-16')}>
        <div className="min-h-96 flex flex-col gap-y-10 mb-12">
          {nodes.map((v, key) => (
            <PostCard className="" key={key} {...v} />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrev
                href="#"
                isActive={pageInfo.hasPreviousPage}
                aria-label="Previous Page"
                onClick={prevHandler}
              />
            </PaginationItem>

            <PaginationItem className="text-sm">
              {Pg.pageOfPage(page, pageSize, totalDocuments).text}
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                isActive={pageInfo.hasNextPage}
                aria-label="Next Page"
                onClick={nextHandler}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export const PostlistFallback = ({ className }: PropsWithClassName) => (
  <div className="grow">
    <div className="md:max-w-xl mb-10">
      <InputSearch disabled />
    </div>

    <div className={cn('flex flex-col gap-y-16', className)}>
      <div className="min-h-96 flex flex-col gap-y-10 mb-12">
        <PostCardFallback />
        <PostCardFallback />
      </div>

      <div className="flex justify-center space-x-4">
        <SkeletonTextSM className="w-16" />
        <SkeletonTextSM className="w-12" />
        <SkeletonTextSM className="w-16" />
      </div>
    </div>
  </div>
);

export default PostList;
