'use client';
import React from 'react';
import { Skeleton, SkeletonTextSM } from 'src/components/ui/skeleton';
import { Small, XSmall } from 'src/components/atoms/typography/p';
import Avatar from 'src/components/atoms/image/async-avatar';
import useQuery from 'src/hooks/use-suspense-query';
import GET_ME, { Me } from 'src/service/hashnode/queries/me';
import { cn, PropsWithClassName } from 'src/utils';

const MeProfileCard = ({ className }: PropsWithClassName) => {
  const { data, error } = useQuery(GET_ME);
  const { ...v } = Me.flatten(data);

  return (
    <div className={cn('h-fit w-full md:max-w-sm flex gap-x-3', className)}>
      <a href={Me.urlProfile(v.username)} aria-label="hashnode profile">
        <Avatar className="h-16 w-16" src={v.profilePicture} alt={v.name} />
      </a>
      <div className="flex flex-col justify-center gap-y-2">
        <Small className="font-bold">{v.name}</Small>
        <div className="flex flex-col gap-y-1">
          <XSmall className="font-light">{v.tagline}</XSmall>
          <XSmall className="font-light">{v.location}</XSmall>
        </div>
      </div>
    </div>
  );
};

export const MeProfileCardFallback = ({ className }: PropsWithClassName) => {
  return (
    <div className={cn('h-fit flex gap-x-3', className)}>
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center gap-y-2">
        <SkeletonTextSM />
        <div className="flex flex-col gap-y-1">
          <SkeletonTextSM className="w-52" />
          <SkeletonTextSM className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default MeProfileCard;
