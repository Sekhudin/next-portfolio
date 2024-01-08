import { cn, PropsWithClassName } from 'src/utils';
import SOCIAL_MEDIA from 'src/config/social-media';
import SocialMediaItem from './tooltip';

export default function AnchorSocialMedia({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        `w-fit flex items-center space-x-4 dark:bg-secondary
        dark:border dark:border-zinc-600/50 dark:p-2 rounded-full`,
        className
      )}>
      {SOCIAL_MEDIA.map((v, key) => (
        <SocialMediaItem
          key={key}
          tooltip={v.description}
          href={v.href}
          target="_blank"
          aria-label={v.name}>
          <v.IconComponent className="dark:h-5 dark:w-5" />
        </SocialMediaItem>
      ))}
    </div>
  );
}
