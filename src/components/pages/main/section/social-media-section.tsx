import {
  TooltipGithub,
  TooltipInstagram,
  TooltipLinkedin,
  TooltipTwitter,
} from 'src/components/atoms/anchor/tooltip-social-media';
import { cn, PropsWithClassName } from 'src/utils';

export default function SocialMediaSection({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        `w-fit flex items-center space-x-3 dark:bg-secondary
        dark:border dark:border-zinc-600/50 dark:p-1.5 rounded-full`,
        className
      )}>
      <TooltipGithub />
      <TooltipLinkedin />
      <TooltipTwitter />
      <TooltipInstagram />
    </div>
  );
}
