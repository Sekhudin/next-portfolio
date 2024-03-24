'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PaginationFallback,
} from 'src/components/ui/pagination';
import { Small } from 'src/components/atoms/typography/p';
import type { QueryMePostsArgs, PostSortBy, PostFilter } from 'src/types/graphql/hashnode-type';
import type { _UseApolloSuspenseQueryDI, _UseStateDI } from 'src/types/dependencies/hooks';
import type { _HashnodeQueryMePostsDI } from 'src/types/dependencies/service';
import { cn, PropsWithClassName, PropsWithChildren, PickDeps, Deps } from 'src/utils';
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
    _service: _HashnodeQueryMePostsDI;
  } & PickDeps<typeof PostCard, '_hrefTo'> &
    Deps<'deps', typeof PostCard>['deps'];
};

type Props = PropsWithClassName<DI & Omit<QueryMePostsArgs, 'sortBy'>>;

const PostList = ({ className, deps, ...v }: Props) => {
  const [page, setPage] = deps._useState<number>(v.page);
  const [pageSize, setPageSize] = deps._useState<number>(v.pageSize);
  const [sortBy, setSortBy] = deps._useState<PostSortBy>(deps._service.SortBy.DatePublishedDesc);
  const [filter, setFilter] = deps._useState<PostFilter>();
  const [selectedTag, setSelectedTag] = deps._useState<string | null>(null);
  const { data } = deps._useQuery(deps._service.Query, {
    variables: { page, pageSize, sortBy, filter },
  });
  const { nodes, pageInfo, totalDocuments } = deps._service.flatten(data);

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
    <div className={cn(`grow w-full`, className)}>
      <SeriesButton className="my-6">Series</SeriesButton>

      <div className={cn('flex flex-col gap-y-16')}>
        <div className="min-h-96 flex flex-col gap-y-10 mb-12">
          {nodes.map((v, key) => (
            <PostCard
              className=""
              key={key}
              postValue={v}
              showCover
              deps={{
                _hrefTo: deps._hrefTo,
                LinkComponent: deps.LinkComponent,
              }}
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
    <SeriesButtonFallback className="w-20 my-6" />

    <div className={cn('flex flex-col gap-y-16', className)}>
      <div className="min-h-96 flex flex-col gap-y-10 mb-12">
        <PostCardFallback n={5} />
      </div>

      <PaginationFallback />
    </div>
  </div>
);

export default PostList;
