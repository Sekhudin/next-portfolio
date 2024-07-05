'use client';
import React from 'react';
import { Small, XSmall } from 'components/typography/p';
import AsyncAvatar from 'components/images/async-avatar.image';
import ErrorBoundary from 'components/boundaries/error.boundary';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import { Props, WithSkeleton } from 'packages/utils/cn';
import useSuspenseQuery from 'packages/hooks/use-suspense-query';
import myProfileQuery from 'modules/hashnode/queries/my-profile.query';

const MyProfile = () => {
  const result = useSuspenseQuery(myProfileQuery.query);
  const user = React.useMemo(() => myProfileQuery.init(result.data), [result.data]);

  return (
    <React.Fragment>
      <a href={user.getProfileUrl()} aria-label="hashnode profile">
        <AsyncAvatar className="h-16 w-16" src={user.profilePicture} alt={user.name} />
      </a>
      <div className="flex flex-col justify-center gap-y-3">
        <Small className="font-bold">{user.name}</Small>
        <div className="flex flex-col gap-y-1">
          <XSmall className="font-light">{user.tagline}</XSmall>
          <XSmall className="font-light">{user.location}</XSmall>
        </div>
      </div>
    </React.Fragment>
  );
};

const MyProfileSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center gap-y-2">
        <SkeletonText className="w-52" size="xs" />
        <SkeletonParagraph className="gap-y-1" n={1} size="xs" diffLast />
      </div>
    </React.Fragment>
  );
};

const MyProfileSuspense = () => (
  <div className="h-fit w-full md:max-w-sm flex gap-x-3">
    <ErrorBoundary fallback="Failed to fetch profile.">
      <React.Suspense fallback={<MyProfileSkeleton />}>
        <MyProfile />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default MyProfileSuspense;
