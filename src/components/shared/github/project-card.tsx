import { type SingleRepository } from 'src/service/github/queries/repositories';
import { cn, PropsWithClassName } from 'src/utils';

const ProjectCard = ({ className, ...v }: PropsWithClassName<SingleRepository>) => (
  <div className={cn(``, className)}>
    <div>card</div>
    {v.name}
  </div>
);

export const ProjectCardFallback = ({ className }: PropsWithClassName) => (
  <div className={cn(``, className)}>
    <div>Fallback</div>
  </div>
);

export default ProjectCard;
