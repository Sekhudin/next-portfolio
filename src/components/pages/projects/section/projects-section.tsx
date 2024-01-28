import React from 'react';
import ProjectList, { ProjectListFallback } from 'src/components/shared/github/project-list';
import { cn, PropsWithClassName } from 'src/utils';

const ProjectSection = ({ className }: PropsWithClassName) => (
  <React.Suspense fallback={<ProjectListFallback />}>
    <ProjectList className={cn(``, className)} pageSize={10} />
  </React.Suspense>
);

export default ProjectSection;
