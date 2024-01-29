'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
} from 'src/components/ui/pagination';
import { ToggleGroup, ToggleGroupItem } from 'src/components/ui/toggle-group';
import { SkeletonTextSM } from 'src/components/ui/skeleton';
import { Small } from 'src/components/atoms/typography/p';
import useQuery from 'src/hooks/use-suspense-query';
import GET_POSTS, {
  PostSort,
  Post,
  type Args_POST,
  type PostFilter,
} from 'src/service/hashnode/queries/posts';
import { cn, PropsWithClassName, PropsWithChildren } from 'src/utils';
import PostCard, { PostCardFallback } from './post-card';

type PostListprops = PropsWithClassName<Omit<Args_POST, 'sortBy'>>;

const args: Args_POST = {
  page: 1,
  pageSize: 1,
  sortBy: PostSort.DatePublishedAsc,
};

const PostMessage = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`grow min-h-48 flex justify-center items-center`, className)}>
    <Small>{children}</Small>
  </div>
);

const PostList = ({ className, ...v }: PostListprops = { className: '', ...args }) => {
  const [page, setPage] = React.useState<number>(v.page);
  const [beforePage, setBeforePage] = React.useState<number>(v.page);
  const [pageSize, setPageSize] = React.useState<number>(v.pageSize);
  const [beforePageSize, setBeforePageSize] = React.useState<number>(v.pageSize);
  const [sortBy, setSortBy] = React.useState<PostSort>(PostSort.DatePublishedAsc);
  const [filter, setFilter] = React.useState<PostFilter>();
  const { data } = useQuery(GET_POSTS, { variables: { page, pageSize, sortBy, filter } });
  const { nodes, pageInfo, totalDocuments, tags } = Post.flatten(data);

  const filterHandler = <T extends keyof PostFilter>(type: T, value: PostFilter[T]): void => {
    if (value) {
      setPage(v.page);
      setPageSize(v.pageSize);
      setBeforePage(page);
      setBeforePageSize(pageSize);
    }

    if (!value) {
      setPage(beforePage);
      setPageSize(beforePageSize);
    }

    if (type === 'tags') {
      const tags = value as PostFilter['tags'];
      setFilter({
        ...filter,
        tags,
      });
      return;
    }
  };

  const tagOnChange = (value: string | string[]) => {
    const tagsId: string[] = typeof value === 'string' ? [value] : value;
    const selectedTag = tagsId[0]
      ? tags.filter(({ id }) => tagsId.includes(id)).map((v) => v.id)
      : null;
    filterHandler<'tags'>('tags', selectedTag);
  };

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

  if (nodes.length === 0) {
    return <PostMessage>No articles yet</PostMessage>;
  }

  return (
    <div className={cn(`grow`, className)}>
      <div className="md:w-10/12 mb-10 flex gap-x-2">
        <div className="py-1">
          <Small className="font-semibold mb-4">Tags:</Small>
        </div>
        <ToggleGroup
          className="grow justify-start items-start"
          type="multiple"
          orientation="horizontal"
          onValueChange={tagOnChange}>
          {tags.map((tag, key) => (
            <ToggleGroupItem
              className={`text-xs font-light data-[state=on]:text-zinc-50
              data-[state=on]:bg-indigo-700`}
              key={key}
              variant="default"
              size="fit"
              value={tag.id}>
              <p className="first-letter:uppercase">{tag.name}</p>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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

            <PaginationItem className="text-sm mx-1">
              {Post.pageStatus(page, pageSize, totalDocuments)}
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
    <div className="md:w-10/12 mb-10 flex space-x-2">
      <Small className="font-semibold mb-4 py-1">Tags:</Small>
      <div className="grow flex justify-start items-start space-x-1">
        <SkeletonTextSM className="w-10 px-2 py-1" />
        <SkeletonTextSM className="w-12 px-2 py-1" />
      </div>
    </div>

    <div className={cn('flex flex-col gap-y-16', className)}>
      <div className="min-h-96 flex flex-col gap-y-10 mb-12">
        {Array.from({ length: 5 }).map((_, key) => (
          <PostCardFallback key={key} />
        ))}
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
