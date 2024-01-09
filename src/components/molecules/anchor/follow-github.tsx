import { cn, PropsWithClassName } from 'src/utils';
import { GITHUB } from 'src/config/social-media';
import HOC from './follow-hoc';

const AnchorGithub = HOC(GITHUB);
export default function FollowGithub({ className }: PropsWithClassName) {
  return <AnchorGithub href="/" className={cn(``, className)} />;
}
