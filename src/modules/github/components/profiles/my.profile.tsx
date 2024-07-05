'use client';
import React from 'react';
import { Small, XSmall } from 'components/typography/p';
import AsyncAvatar from 'components/images/async-avatar.image';
import ErrorBoundary from 'components/boundaries/error.boundary';
import { Separator } from 'packages/ui/separator';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import { cn, Props } from 'packages/utils/cn';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import profileQuery from 'modules/github/queries/profile.query';

const MyProfile = ({ className }: Props) => {
  const result = useSuspenseQuery(profileQuery.query);
  const profile = React.useMemo(() => profileQuery.init(result.data), [result.data]);

  return (
    <React.Fragment>
      <a href={profile.url} aria-label="hashnode profile">
        <AsyncAvatar className="h-16 w-16" src={profile.avatarUrl} alt={profile.name} />
      </a>
      <div className="flex flex-col justify-center gap-y-3">
        <div className="flex items-center gap-x-2">
          <Small className="font-bold">{profile.name}</Small>
          <Separator className="w-0.5" orientation="vertical" />
          <Small className="font-light">{profile.pronouns}</Small>
        </div>

        <div className="flex flex-col gap-y-1">
          <XSmall className="font-light">{profile.bio}</XSmall>
          <div className="flex items-center gap-x-4">
            <XSmall className="font-light">
              <span className="font-semibold">{profile.getTotalFollowers()}</span>
            </XSmall>
            <XSmall className="font-light">
              <span className="font-semibold">{profile.getTotalFollowing()}</span>
            </XSmall>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const MyProfileSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center gap-y-2">
        <div className="flex items-center gap-x-2">
          <SkeletonText />
          <Separator className="w-0.5" orientation="vertical" />
          <SkeletonText className="w-12" />
        </div>

        <div className="flex flex-col gap-y-1">
          <SkeletonText className="w-52" size="xs" />
          <SkeletonParagraph
            className="flex-row items-center gap-x-4"
            childClassName="w-14"
            size="xs"
            n={2}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const MyProfileSuspense = ({ className }: Props) => (
  <React.Fragment>
    <ErrorBoundary fallback="Failed to fetch profile.">
      <div className={cn(`h-fit w-full md:max-w-sm flex gap-x-3`, className)}>
        <React.Suspense fallback={<MyProfileSkeleton />}>
          <MyProfile />
        </React.Suspense>
      </div>
    </ErrorBoundary>
  </React.Fragment>
);

export default MyProfileSuspense;
