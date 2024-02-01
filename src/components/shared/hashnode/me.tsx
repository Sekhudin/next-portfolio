'use client';
import React from 'react';
import { Skeleton, SkeletonTextSM } from 'src/components/ui/skeleton';
import { Small, XSmall } from 'src/components/atoms/typography/p';
import Avatar from 'src/components/atoms/image/async-avatar';
import type { _UseApolloSuspenseQueryDI } from 'src/types/dependencies/graphql';
import type { _HashnodeQueryMeDI } from 'src/types/dependencies/service';
import { cn, PropsWithClassName } from 'src/utils';

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _service: _HashnodeQueryMeDI;
  };
};

type Props = PropsWithClassName<DI>;
const MeProfile = ({ className, deps }: Props) => {
  const { data } = deps._useQuery(deps._service.Query);
  const { ...v } = deps._service.Result.flatten(data);

  return (
    <div className={cn('h-fit w-full md:max-w-sm flex gap-x-3', className)}>
      <a href={deps._service.Result.profileUrl(v.username)} aria-label="hashnode profile">
        <Avatar className="h-16 w-16" src={v.profilePicture} alt={v.name} />
      </a>
      <div className="flex flex-col justify-center gap-y-3">
        <Small className="font-bold">{v.name}</Small>
        <div className="flex flex-col gap-y-1">
          <XSmall className="font-light">{v.tagline}</XSmall>
          <XSmall className="font-light">{v.location}</XSmall>
        </div>
      </div>
    </div>
  );
};

export const MeProfileFallback = ({ className }: PropsWithClassName) => {
  return (
    <div className={cn('h-fit flex gap-x-3', className)}>
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center gap-y-3">
        <SkeletonTextSM />
        <div className="flex flex-col gap-y-1">
          <SkeletonTextSM className="w-52" />
          <SkeletonTextSM className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default MeProfile;
