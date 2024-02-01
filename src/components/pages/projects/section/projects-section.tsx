import React from 'react';
import ProjectList, { ProjectListFallback } from 'src/components/shared/github/project-list';
import { cn, PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<Deps<'deps', typeof ProjectList>>;
const ProjectSection = ({ className, deps }: Props) => (
  <React.Suspense fallback={<ProjectListFallback />}>
    <ProjectList className={cn(``, className)} pageSize={10} deps={deps} />
  </React.Suspense>
);

export default ProjectSection;
