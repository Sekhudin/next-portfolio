'use client';
import { Separator } from 'src/components/ui/separator';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import { Small, XSmall } from 'src/components/atoms/typography/p';
import Avatar from 'src/components/atoms/image/async-avatar';
import type { _UseApolloSuspenseQueryDI } from 'src/types/dependencies/hooks';
import type { _GithubQueryMeViewerDI } from 'src/types/dependencies/service';
import { cn, PropsWithClassName } from 'src/utils';

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _service: _GithubQueryMeViewerDI;
  };
};

type Props = PropsWithClassName<DI>;
const MeProfile = ({ className, deps }: Props) => {
  const { data } = deps._useQuery(deps._service.Query);
  const { profile: v, followers, following } = deps._service.flatten(data);

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
    </div>
  );
};

export default MeProfile;
