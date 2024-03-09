import { ExternalLink } from 'lucide-react';
import { Separator } from 'src/components/ui/separator';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import ICON from 'src/components/atoms/icon/hoc';
import Avatar from 'src/components/atoms/image/async-avatar';
import { Small, PlainAnchor } from 'src/components/atoms/typography/p';
import Entity, { Repository } from 'src/service/github/entity/repository';
import type { _HrefToDI, _ToastDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, MouseEventHandler } from 'src/utils';

type DI = {
  deps: {
    _hrefTo: _HrefToDI;
    _toast: _ToastDI;
  };
};
type Props = PropsWithClassName<DI & Repository>;

const ExternalLinkIcon = ICON(ExternalLink);
const ProjectCard = ({ className, deps, ...projectValue }: Props) => {
  const { primaryLanguage, description, ...repo } = new Entity(projectValue);
  const anchorHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (repo.isHidden) {
      deps._toast({
        variant: 'error',
        title: 'Unreachable Link',
        description: 'Link inaccessible. Retry later.',
      });
      return;
    }
    const anchorElements = e.currentTarget.getElementsByTagName('a');
    const anchorHomePage = anchorElements[0];
    const anchorAPIDocs = anchorElements[1];
    if (e.target === anchorHomePage) return;
    if (e.target === anchorAPIDocs) return;
    deps._hrefTo(repo.url, '_blank');
  };

  return (
    <div
      className={cn(
        `relative hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 group
        rounded-lg md:rounded-xl flex flex-col p-4 ${
          repo.isHidden ? 'cursor-not-allowed' : 'cursor-pointer'
        }`,
        className,
        'border dark:border-zinc-600/50 md:border-none'
      )}
      onClick={anchorHandler}>
      <span
        className="absolute top-4 right-4 opacity-0
        group-hover:opacity-100 duration-150 delay-100">
        <ExternalLinkIcon className="h-5 w-5" />
      </span>

      <div className="flex items-end justify-between mb-6">
        {repo.iconApp ? (
          <div
            className="w-12 h-12 flex justify-center items-center border dark:border-[1.5px] rounded-full
            bg-zinc-100 dark:bg-indigo-700/20 dark:border-zinc-500/50 shadow-lg">
            <repo.iconApp className="stroke-zinc-700 dark:stroke-indigo-700" />
          </div>
        ) : (
          <Avatar
            className="w-12 h-12 border dark:border-[1.5px]
          dark:border-zinc-500/50 shadow-lg"
            alt={repo.name}
          />
        )}

        {description.isPackage && (
          <div
            className={`w-fit h-fit bg-indigo-700 rounded text-xs text-white dark:text-zinc-300 p-1 py-0.5`}>
            package
          </div>
        )}
      </div>

      <div className="min-h-[10rem] grow flex flex-col justify-between gap-y-2">
        <div className="h-full flex flex-col md:justify-between">
          <div>
            <p
              className="scroll-m-20 text-lg font-semibold tracking-tight text-zinc-800
              dark:text-zinc-300 first-letter:uppercase mb-4">
              {repo.name}
            </p>
            <Small className="font-light dark:font-extralight first-letter:uppercase leading-5 text-wrap">
              {description.plain}
            </Small>
          </div>

          <div className="grow flex items-end mt-10 font-mono">
            {description.tags && description.tags.length && (
              <div className="flex flex-wrap gap-2">
                {description.tags.map((tag, id) => (
                  <div
                    className={`bg-zinc-700/10 dark:bg-indigo-700/50 dark:border dark:border-indigo-700
                    rounded text-xs text-zinc-700 dark:text-zinc-300 p-1 py-0.5`}
                    key={id}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            {!description.tags && primaryLanguage && (
              <div className={`flex items-center space-x-1`}>
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: `${primaryLanguage.color}` }}
                />
                <span className="text-xs">{primaryLanguage.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          {repo.homepageUrl && (
            <PlainAnchor
              className="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400
            hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
              href={repo.homepageUrl}
              target="_blank"
              aria-label="Home Page">
              {description.isPackage ? 'NPM' : 'Home Page'}
            </PlainAnchor>
          )}
          {description.api_url && (
            <>
              <Separator className="mx-2" orientation="vertical" />
              <PlainAnchor
                className="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400
                hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
                href={description.api_url}
                target="_blank"
                aria-label="API Documentations">
                Docs
              </PlainAnchor>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectCardFallback = ({ className }: PropsWithClassName) => (
  <div
    className={cn(
      `rounded-lg md:rounded-xl flex flex-col border dark:border-zinc-600/50 md:border-none p-4`,
      className
    )}>
    <Skeleton
      className="w-12 h-12 rounded-full mb-6 border dark:border-[1.5px]
      dark:border-zinc-500/50 shadow-lg"
    />

    <div className="min-h-[10rem] flex flex-col justify-between gap-y-2">
      <div>
        <SkeletonText className="w-1/2 mb-6" size="lg" />
        <SkeletonParagraph n={1} diffLast />
        <SkeletonParagraph
          className="mt-6 flex-row gap-y-0 gap-x-1"
          childClassName="w-12"
          rounded="full"
          n={4}
        />
      </div>

      <div className="flex">
        <SkeletonText className="w-3/12" />
        <Separator className="mx-2" orientation="vertical" />
        <SkeletonText className="w-2/12" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
