'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PaginationFallback,
} from 'src/components/ui/pagination';
import type { _UseApolloSuspenseQueryDI, _UseStateDI } from 'src/types/dependencies/hooks';
import type { _GithubQueryRepositoriesDI } from 'src/types/dependencies/service';
import type { _HrefToDI, _ToastDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName } from 'src/utils';
import ProjectCard, { ProjectCardFallback } from './project-card';

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _useState: _UseStateDI;
    _service: _GithubQueryRepositoriesDI;
    _hrefTo: _HrefToDI;
    _toast: _ToastDI;
  };
};
type Props = PropsWithClassName<
  DI & {
    pageSize: number;
  }
>;

const ProjectList = ({ className, deps, ...v }: Props) => {
  const [page, setPage] = deps._useState<number>(1);
  const [first, setFirst] = deps._useState<number | null>(v.pageSize);
  const [last, setLast] = deps._useState<number | null>(null);
  const [after, setAfter] = deps._useState<string | null>(null);
  const [before, setBefore] = deps._useState<string | null>(null);
  const { data } = deps._useQuery(deps._service.Query, {
    variables: {
      first,
      last,
      after,
      before,
      orderBy: {
        direction: deps._service.OrderDirection.Desc,
        field: deps._service.OrderField.UpdatedAt,
      },
      privacy: deps._service.Privacy.Public,
      isFork: false,
    },
  });
  const { nodes, pageInfo, totalCount } = deps._service.flatten(data);
  const prevHandler = () => {
    if (pageInfo.startCursor) {
      setPage(page - 1);
      setAfter(null);
      setFirst(null);
      setLast(v.pageSize);
      setBefore(pageInfo.startCursor);
    }
  };

  const nextHandler = () => {
    if (pageInfo.endCursor) {
      setPage(page + 1);
      setBefore(null);
      setLast(null);
      setFirst(v.pageSize);
      setAfter(pageInfo.endCursor);
    }
  };

  return (
    <div className={cn(``, className)}>
      <div className="flex flex-col gap-y-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}>
          {nodes.map((repo, key) => (
            <ProjectCard
              className=""
              key={key}
              deps={{ _hrefTo: deps._hrefTo, _toast: deps._toast }}
              {...repo}
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
              {deps._service.pageStatus(page, v.pageSize, totalCount)}
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

export const ProjectListFallback = () => (
  <div>
    <div className="flex flex-col gap-y-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}>
        {Array.from({ length: 10 }).map((_, key) => (
          <ProjectCardFallback key={key} />
        ))}
      </div>

      <PaginationFallback />
    </div>
  </div>
);

export default ProjectList;
