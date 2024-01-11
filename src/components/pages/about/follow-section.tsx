import { FollowGithub, FollowTwitter } from 'src/components/molecules/anchor/follow';
import { cn, PropsWithClassName } from 'src/utils';

export default function FollowSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(`flex flex-col space-y-2`, className)}>
      <FollowGithub />
      <FollowTwitter />
    </div>
  );
}
