'use client';
import { Separator } from 'src/components/ui/separator';
import { Skeleton, SkeletonTextSM } from 'src/components/ui/skeleton';
import { Small, XSmall } from 'src/components/atoms/typography/p';
import Avatar from 'src/components/atoms/image/async-avatar';
import useQuery from 'src/hooks/use-suspense-query';
import GET_USER, { Me } from 'src/service/github/queries/me';
import { cn, PropsWithClassName } from 'src/utils';

const MeProfile = ({ className }: PropsWithClassName) => {
  const { data } = useQuery(GET_USER);
  const { profile: v, followers, following } = Me.flatten(data);

  return (
    <div className={cn('h-fit w-full md:max-w-sm flex gap-x-3', className)}>
      <a href={v.url} aria-label="hashnode profile">
        <Avatar className="h-16 w-16" src={v.avatarUrl} alt={v.name || 'Sekhudin'} />
      </a>
      <div className="flex flex-col justify-center gap-y-3">
        <div className="flex items-center gap-x-2">
          <Small className="font-bold">{v.name}</Small>
          <Separator className="w-0.5" orientation="vertical" />
          <Small className="font-light">{v.pronouns}</Small>
        </div>

        <div className="flex flex-col gap-y-1">
          <XSmall className="font-light">{v.bio}</XSmall>
          <div className="flex items-center gap-x-4">
            <XSmall className="font-light">
              <span className="font-semibold">{followers.totalCount}</span>
              {` Followers`}
            </XSmall>
            <XSmall className="font-light">
              <span className="font-semibold">{following.totalCount}</span>
              {` Followings`}
            </XSmall>
          </div>
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
        <div className="flex items-center gap-x-2">
          <SkeletonTextSM />
          <Separator className="w-0.5" orientation="vertical" />
          <SkeletonTextSM className="w-12" />
        </div>

        <div className="flex flex-col gap-y-1">
          <SkeletonTextSM className="w-52" />
          <div className="flex items-center gap-x-4">
            <SkeletonTextSM className="w-14" />
            <SkeletonTextSM className="w-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeProfile;
