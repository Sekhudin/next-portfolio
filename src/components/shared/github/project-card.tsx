import { ExternalLink } from 'lucide-react';
import { toast } from 'src/components/ui/use-toast';
import { Skeleton, SkeletonTextSM, SkeletonTextXL } from 'src/components/ui/skeleton';
import ICON from 'src/components/atoms/icon/hoc';
import Avatar from 'src/components/atoms/image/async-avatar';
import { H4 } from 'src/components/atoms/typography/h';
import { Small, PlainAnchor } from 'src/components/atoms/typography/p';
import { type SingleRepository, Repos } from 'src/service/github/queries/repositories';
import { cn, hrefTo, PropsWithClassName } from 'src/utils';

const ExternalLinkIcon = ICON(ExternalLink);
const ProjectCard = ({ className, ...v }: PropsWithClassName<SingleRepository>) => {
  const { tech, language, isHidden, newDescription } = Repos.techProject({ ...v });

  const anchorHandler = () => {
    if (isHidden) {
      toast({
        variant: 'error',
        title: 'Unreachable Link',
        description: 'Link inaccessible. Retry later.',
      });
      return;
    }
    hrefTo(v.url, '_blank');
  };

  return (
    <div
      className={cn(
        `relative hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 group
        rounded-lg md:rounded-xl flex flex-col p-4 ${
          isHidden ? 'cursor-not-allowed' : 'cursor-pointer'
        }`,
        className
      )}
      onClick={anchorHandler}>
      <span
        className="absolute top-4 right-4 opacity-0
        group-hover:opacity-100 duration-150 delay-100">
        <ExternalLinkIcon className="h-5 w-5" />
      </span>
      <Avatar
        className="w-12 h-12 mb-6 border dark:border-[1.5px]
        dark:border-zinc-500/50 shadow-lg"
        alt={v.name}
      />

      <div className="h-40 md:h-52 xl:h-56 flex flex-col justify-between gap-y-2">
        <div>
          <H4 className="first-letter:uppercase mb-4">{v.name}</H4>
          <Small className="font-light dark:font-extralight leading-5 text-wrap truncate">
            {newDescription}
          </Small>
          <div className="mt-4 font-mono">
            {tech && (
              <Small className="font-bold">
                {'Tech: '}
                <span className="font-normal">{tech}</span>
              </Small>
            )}
            {language && !tech && (
              <Small className={`font-bold`}>
                {'Language: '}
                <span className="font-normal" style={{ color: `${language.color}` }}>
                  {language.name}
                </span>
              </Small>
            )}
          </div>
        </div>

        {v.homepageUrl && (
          <PlainAnchor
            className="text-sm font-semibold text-zinc-500 dark:text-zinc-400
            hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
            href={v.homepageUrl}
            target="_blank"
            aria-label="Learn More to Home Page">
            Learn More
          </PlainAnchor>
        )}
      </div>
    </div>
  );
};

export const ProjectCardFallback = ({ className }: PropsWithClassName) => (
  <div className={cn(`rounded-lg md:rounded-xl flex flex-col p-4`, className)}>
    <Skeleton
      className="w-12 h-12 rounded-full mb-6 border dark:border-[1.5px]
      dark:border-zinc-500/50 shadow-lg"
    />

    <div className="h-40 md:h-52 xl:h-56 flex flex-col justify-between gap-y-2">
      <div>
        <SkeletonTextXL className="w-1/2 mb-4" />
        <SkeletonTextSM className="w-full" />
        <SkeletonTextSM className="w-3/4 mt-2" />
        <div className="flex gap-x-2">
          <SkeletonTextSM className="w-2/12 mt-4" />
          <SkeletonTextSM className="w-7/12 mt-4" />
        </div>
      </div>

      <SkeletonTextSM className="w-3/12" />
    </div>
  </div>
);

export default ProjectCard;
