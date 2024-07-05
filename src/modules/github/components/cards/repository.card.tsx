import React from 'react';
import { ExternalLink } from 'lucide-react';
import IconHOC from 'components/HOCs/icon.hoc';
import ConditionalContainer from 'components/containers/conditional.container';
import AsyncAvatar from 'components/images/async-avatar.image';
import { Small, PlainAnchor } from 'components/typography/p';
import LabelTag from 'components/tags/label.tag';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import { Separator } from 'packages/ui/separator';
import { cn } from 'packages/utils/cn';
import Repository, { RepositoryEntity } from 'modules/github/entities/repository.entity';
import DescriptionParser from 'modules/github/entities/description-parser';

const ExternalLinkIcon = IconHOC(ExternalLink);
const RepositoryCard = ({ ...props }: RepositoryEntity) => {
  const repository = React.useMemo(() => Repository(props), [props]);
  const repo = React.useMemo(() => {
    return DescriptionParser(repository.description).parse(repository.name);
  }, [repository.description, repository.name]);
  // const anchorHandler: MouseEventHandler<HTMLDivElement> = (e) => {
  //   if (repo.isHidden) {
  //     deps._toast({
  //       variant: 'error',
  //       title: 'Unreachable Link',
  //       description: 'Link inaccessible. Retry later.',
  //     });
  //     return;
  //   }
  //   const anchorElements = e.currentTarget.getElementsByTagName('a');
  //   const anchorHomePage = anchorElements[0];
  //   const anchorAPIDocs = anchorElements[1];
  //   if (e.target === anchorHomePage) return;
  //   if (e.target === anchorAPIDocs) return;
  //   deps._hrefTo(repo.url, '_blank');
  // };

  return (
    <div
      className={cn(
        `relative hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 group
        rounded-lg md:rounded-xl flex flex-col p-4 border dark:border-zinc-600/50 md:border-none`,
        repo.getClassName()
      )}
      // onClick={anchorHandler}
    >
      <span
        className="absolute top-4 right-4 opacity-0
        group-hover:opacity-100 duration-150 delay-100">
        <ExternalLinkIcon className="h-5 w-5" />
      </span>

      <div className="flex items-end justify-between mb-6">
        <ConditionalContainer
          isVisible={repo.icon}
          fallback={
            <AsyncAvatar
              className="w-12 h-12 border dark:border-[1.5px] dark:border-zinc-500/50 shadow-lg"
              alt={repository.name}
            />
          }>
          <div
            className="w-12 h-12 flex justify-center items-center border dark:border-[1.5px] rounded-full
            bg-zinc-100 dark:bg-indigo-700/20 dark:border-zinc-500/50 shadow-lg">
            {repo.icon && <repo.icon className="stroke-zinc-700 dark:stroke-indigo-700" />}
          </div>
        </ConditionalContainer>

        <ConditionalContainer isVisible={repo.isType('package')}>
          <div
            className={`w-fit h-fit bg-indigo-700 rounded text-xs text-white dark:text-zinc-300 p-1 py-0.5`}>
            package
          </div>
        </ConditionalContainer>
      </div>

      <div className="min-h-[10rem] grow flex flex-col justify-between gap-y-2">
        <div className="h-full flex flex-col md:justify-between">
          <div>
            <p
              className="scroll-m-20 text-lg font-semibold tracking-tight text-zinc-800
              dark:text-zinc-300 first-letter:uppercase mb-4">
              {repository.name}
            </p>
            <Small className="font-light dark:font-extralight first-letter:uppercase leading-5 text-wrap">
              {repo.description}
            </Small>
          </div>

          <div className="grow flex items-end mt-10 font-mono">
            {repo.tags && (
              <div className="flex flex-wrap gap-2">
                {repo.tags.map((tag, id) => (
                  <LabelTag key={id}>{tag}</LabelTag>
                ))}
              </div>
            )}

            {!repo.tags && repository.primaryLanguage && (
              <div className={`flex items-center space-x-1`}>
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: `${repository.primaryLanguage.color}` }}
                />
                <span className="text-xs">{repository.primaryLanguage.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          {repo.url.homePage && (
            <PlainAnchor
              className="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400
            hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
              href={repo.url.homePage}
              target="_blank"
              aria-label="Home Page">
              {repo.isType('package') ? 'NPM Docs' : 'Home Page'}
            </PlainAnchor>
          )}

          {repo.url.api && (
            <>
              <Separator className="mx-2" orientation="vertical" />
              <PlainAnchor
                className="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400
                hover:text-zinc-700 hover:dark:text-zinc-300 duration-150 py-1"
                href={repo.url.api}
                target="_blank"
                aria-label="API Documentations">
                API Docs
              </PlainAnchor>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const MemoizeRepositoryCard = React.memo(RepositoryCard);
export const RepositoryCardSkeleton = () => (
  <div
    className={cn(
      `rounded-lg md:rounded-xl flex flex-col border dark:border-zinc-600/50 md:border-none p-4`
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
