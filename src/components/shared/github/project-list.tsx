'use client';
import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
} from 'src/components/ui/pagination';
import { SkeletonTextSM } from 'src/components/ui/skeleton';
import type { _UseApolloSuspenseQueryDI } from 'src/types/dependencies/graphql';
import type { _GithubQueryReposDI } from 'src/types/dependencies/service';
import type { _HrefToDI, _ToastDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName } from 'src/utils';
import ProjectCard, { ProjectCardFallback } from './project-card';

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _service: _GithubQueryReposDI;
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
  const [page, setPage] = useState<number>(1);
  const [first, setFirst] = useState<number | null>(v.pageSize);
  const [last, setLast] = useState<number | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);
  const { data } = deps._useQuery(deps._service.Query, {
    variables: {
      first,
      last,
      after,
      before,
      orderBy: {
        direction: deps._service.OrderDirection.Asc,
        field: deps._service.OrderField.UpdatedAt,
      },
      privacy: deps._service.Privacy.Public,
      isFork: false,
    },
  });
  const { nodes, pageInfo, totalCount } = deps._service.Result.flatten(data);
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
              deps={{ _hrefTo: deps._hrefTo, _toast: deps._toast, _service: deps._service.Result }}
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
              {deps._service.Result.pageStatus(page, v.pageSize, totalCount)}
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

      <div className="flex justify-center space-x-4 mt-4">
        <SkeletonTextSM className="w-16" />
        <SkeletonTextSM className="w-12" />
        <SkeletonTextSM className="w-16" />
      </div>
    </div>
  </div>
);

export default ProjectList;
