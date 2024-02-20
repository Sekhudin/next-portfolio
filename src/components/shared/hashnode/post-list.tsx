'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PaginationFallback,
} from 'src/components/ui/pagination';
import { ToggleGroup, ToggleGroupItem, TogleGroupFallback } from 'src/components/ui/toggle-group';
import { Small } from 'src/components/atoms/typography/p';
import type { QueryPostsArgs, PostSortBy, PostFilter } from 'src/types/graphql/hashnode-type';
import type { _UseApolloSuspenseQueryDI, _UseStateDI } from 'src/types/dependencies/hooks';
import type { _HashnodeQueryPostsDI } from 'src/types/dependencies/service';
import type { _LinkComponentDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, PropsWithChildren, PickDeps } from 'src/utils';
import PostCard, { PostCardFallback } from './post-card';
import SeriesButton, { SeriesButtonFallback } from './series-button';

const PostMessage = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`grow min-h-48 flex justify-center items-center`, className)}>
    <Small>{children}</Small>
  </div>
);

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _useState: _UseStateDI;
    _service: _HashnodeQueryPostsDI;
    LinkComponent: _LinkComponentDI;
  } & PickDeps<typeof PostCard, '_hrefTo'>;
};

type Props = PropsWithClassName<DI & Omit<QueryPostsArgs, 'sortBy'>>;

const PostList = ({ className, deps, ...v }: Props) => {
  const [page, setPage] = deps._useState<number>(v.page);
  const [pageSize, setPageSize] = deps._useState<number>(v.pageSize);
  const [sortBy, setSortBy] = deps._useState<PostSortBy>(deps._service.SortBy.DatePublishedDesc);
  const [filter, setFilter] = deps._useState<PostFilter>();
  const [selectedTag, setSelectedTag] = deps._useState<string | null>(null);
  const { data } = deps._useQuery(deps._service.Query, {
    variables: { page, pageSize, sortBy, filter },
  });
  const { nodes, pageInfo, totalDocuments, tags } = deps._service.flatten(data);

  const filterHandler = <T extends keyof PostFilter>(type: T, value: PostFilter[T]): void => {
    if (value) {
      setPage(1);
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

  const tagOnChange = (value: string) => {
    const selected = value ? tags.filter(({ id }) => value === id)[0] : null;
    if (value && selected) {
      filterHandler<'tags'>('tags', [value]);
      setSelectedTag(selected.name);
      return;
    }
    setSelectedTag(null);
    filterHandler<'tags'>('tags', null);
    return;
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
      <div className="md:w-10/12 flex gap-x-2">
        <div className="py-1">
          <Small className="font-semibold mb-4">Tags:</Small>
        </div>
        <ToggleGroup
          className="grow flex-wrap justify-start items-start gap-x-1 gap-y-2"
          type="single"
          orientation="horizontal"
          onValueChange={tagOnChange}>
          {tags.map((tag, key) => {
            if (!selectedTag)
              return (
                <ToggleGroupItem
                  className={`text-xs font-light data-[state=on]:text-zinc-50
                  data-[state=on]:bg-indigo-700`}
                  key={key}
                  variant="rounded"
                  size="fit-sm"
                  value={tag.id}>
                  {tag.name}
                </ToggleGroupItem>
              );

            if (selectedTag && tag.name === selectedTag)
              return (
                <ToggleGroupItem
                  className={`text-xs font-light data-[state=on]:text-zinc-50
                  data-[state=on]:bg-indigo-700`}
                  key={key}
                  variant="rounded"
                  size="fit-sm"
                  value={tag.id}>
                  {tag.name}
                </ToggleGroupItem>
              );
          })}
        </ToggleGroup>
      </div>

      <SeriesButton className='my-6'>Series</SeriesButton>

      <div className={cn('flex flex-col gap-y-16')}>
        <div className="min-h-96 flex flex-col gap-y-10 mb-12">
          {nodes.map((v, key) => (
            <PostCard
              className=""
              key={key}
              deps={{
                _hrefTo: deps._hrefTo,
                LinkComponent: deps.LinkComponent,
              }}
              {...v}
            />
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
              {deps._service.pageStatus(page, pageSize, totalDocuments)}
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
    <div className="md:w-10/12 flex space-x-2">
      <Small className="font-semibold py-1">Tags:</Small>
      <TogleGroupFallback childClassName="rounded-full" size="xs" />
    </div>
    <SeriesButtonFallback className='w-20 my-6' />

    <div className={cn('flex flex-col gap-y-16', className)}>
      <div className="min-h-96 flex flex-col gap-y-10 mb-12">
        <PostCardFallback n={5} />
      </div>

      <PaginationFallback />
    </div>
  </div>
);

export default PostList;
