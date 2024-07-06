import { H1 } from 'components/typography/h';
import { cn, Props } from 'packages/utils/cn';

const ProjectsSummary = ({ className }: Props) => (
  <div className={cn(``, className)}>
    <H1 className="md:w-10/12 lg:w-9/12">{`All Projects.`}</H1>
  </div>
);

export default ProjectsSummary;
