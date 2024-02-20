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
      <ProjectList className={cn(``, className)} pageSize={10} deps={deps} />
    </deps.SuspenseComponent>
  </>
);

export default ProjectSection;
