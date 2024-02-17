import type { MouseEventHandler } from 'react';
import { ExternalLink } from 'lucide-react';
import { Separator } from 'src/components/ui/separator';
import { Skeleton, SkeletonTextSM, SkeletonTextXL } from 'src/components/ui/skeleton';
import ICON from 'src/components/atoms/icon/hoc';
import Avatar from 'src/components/atoms/image/async-avatar';
import { Small, PlainAnchor } from 'src/components/atoms/typography/p';
import type { _GithubQueryReposDI, _GithubQueryRepos } from 'src/types/dependencies/service';
import type { _HrefToDI, _ToastDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName } from 'src/utils';

type DI = {
  deps: {
    _service: _GithubQueryReposDI['Result'];
    _hrefTo: _HrefToDI;
    _toast: _ToastDI;
  };
};
type Props = PropsWithClassName<DI & _GithubQueryRepos['Single']>;

const ExternalLinkIcon = ICON(ExternalLink);
const ProjectCard = ({ className, deps, ...projectValue }: Props) => {
  const { primaryLanguage, description, ...repo } = new deps._service(projectValue);
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

      {repo.iconApp ? (
        <div
          className="w-12 h-12 flex justify-center items-center mb-6
        bg-zinc-50 border dark:border-[1.5px] rounded-full
        dark:border-zinc-500/50 shadow-lg"
          style={{
            borderColor: `${primaryLanguage?.color}`,
          }}>
          <repo.iconApp style={{ stroke: `${primaryLanguage?.color}` }} />
        </div>
      ) : (
        <Avatar
          className="w-12 h-12 mb-6 border dark:border-[1.5px]
        dark:border-zinc-500/50 shadow-lg"
          alt={repo.name}
        />
      )}

      <div className="min-h-[10rem] md:h-52 xl:h-56 flex flex-col justify-between gap-y-2">
        <div>
          <p
            className="scroll-m-20 text-lg font-semibold tracking-tight text-zinc-800
          dark:text-zinc-300 first-letter:uppercase mb-4">
            {repo.name}
          </p>
          <Small className="font-light dark:font-extralight first-letter:uppercase leading-5 text-wrap">
            {description.plain}
          </Small>

          <div className="mt-10 font-mono">
            {description.techstack && description.techstack.length && (
              <div className="flex flex-wrap gap-2">
                {description.techstack.map((tech, id) => (
                  <div
                    className={`bg-indigo-700 dark:bg-indigo-700/50 text-xs dark:border
                    dark:border-indigo-700 rounded-full text-white dark:text-zinc-300 p-1 py-0.5`}
                    key={id}>
                    {tech}
                  </div>
                ))}
              </div>
            )}
            {!description.techstack && primaryLanguage && (
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
              Home page
            </PlainAnchor>
          )}
          {description.apiDocs && (
            <>
              <Separator className="mx-2" orientation="vertical" />
              <PlainAnchor
                className="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400
                hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
                href={description.apiDocs}
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

      <div className="flex">
        <SkeletonTextSM className="w-2/12" />
        <Separator className="mx-2" orientation="vertical" />
        <SkeletonTextSM className="w-1/12" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
