import { cn, PropsWithClassName } from 'src/utils';
import SocialMediaItem from './tooltip';
import { SOCIAL_MEDIA } from 'src/config/social-media';

export default function AnchorSocialMedia({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        `w-fit flex items-center space-x-3 dark:bg-secondary
        dark:border dark:border-zinc-600/50 dark:p-1.5 rounded-full`,
        className
      )}>
      {SOCIAL_MEDIA.map((v, key) => (
        <SocialMediaItem
          key={key}
          tooltip={v.tooltip}
          href={v.href}
          target="_blank"
          aria-label={v.name}>
          <v.IconComponent className="dark:h-5 dark:w-5" />
        </SocialMediaItem>
      ))}
    </div>
  );
}
