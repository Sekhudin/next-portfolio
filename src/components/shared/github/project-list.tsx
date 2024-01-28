'use client';
import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
} from 'src/components/ui/pagination';
import { Small } from 'src/components/atoms/typography/p';
import useQuery from 'src/hooks/use-suspense-query';
import GET_REPOSITORIES, {
  Repos,
  OrderDirection,
  OrderField,
  Privacy,
} from 'src/service/github/queries/repositories';
import Pg from 'src/utils/pagination';
import { cn, PropsWithClassName } from 'src/utils';
import ProjectCard, { ProjectCardFallback } from './project-card';

type ProjectListProps = PropsWithClassName<{
  pageSize: number;
}>;

const ProjectList = ({ className, ...v }: ProjectListProps) => {
  const [page, setPage] = useState<number>(1);
  const [first, setFirst] = useState<number | null>(v.pageSize);
  const [last, setLast] = useState<number | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);
  const { data } = useQuery(GET_REPOSITORIES, {
    variables: {
      first,
      last,
      after,
      before,
      orderBy: {
        direction: OrderDirection.Asc,
        field: OrderField.CreatedAt,
      },
      privacy: Privacy.Public,
    },
  });
  const { nodes, pageInfo, totalCount } = Repos.flatten(data);
  // console.log('nodes :>> ', nodes);
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
      <div>ProjectList</div>

      <div className="flex flex-col gap-y-16">
        <div>
          {nodes.map((repo, key) => (
            <ProjectCard className="" key={key} {...repo} />
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
              {Pg.pageOfPage(page, v.pageSize, totalCount).text}
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
    <div>ProjectList Fallback</div>
  </div>
);

export default ProjectList;
