'use client';
import ProjectList, { ProjectListFallback } from 'src/components/shared/github/project-list';
import type { _SuspenseComponentDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<{
  deps: Deps<'deps', typeof ProjectList>['deps'] & {
    SuspenseComponent: _SuspenseComponentDI;
  };
}>;
const ProjectSection = ({ className, deps }: Props) => (
  <>
    <deps.SuspenseComponent fallback={<ProjectListFallback />}>
      <ProjectList
        className={cn(``, className)}
        pageSize={10}
        deps={{
          _useQuery: deps._useQuery,
          _useState: deps._useState,
          _service: deps._service,
          _hrefTo: deps._hrefTo,
          _toast: deps._toast,
        }}
      />
    </deps.SuspenseComponent>
  </>
);

export default ProjectSection;
