import React from 'react';
import { Separator } from 'src/components/ui/separator';
import ProjectList, { ProjectListFallback } from 'src/components/shared/github/project-list';
import { cn, PropsWithClassName, PropsWithChildren } from 'src/utils';

const ProjectSection = () => (
  <React.Suspense fallback={<ProjectListFallback />}>
    <ProjectList pageSize={3} />
  </React.Suspense>
);

export default ProjectSection;
