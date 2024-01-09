import { cn, PropsWithClassName } from 'src/utils';
import { TWITTER } from 'src/config/social-media';
import HOC from './follow-hoc';

const AnchorTwitter = HOC(TWITTER);
export default function FollowTwitter({ className }: PropsWithClassName) {
  return <AnchorTwitter href="/" className={cn(``, className)} />;
}
