import { PlainAnchor, type AnchorProps } from 'components/typography/p';
import IconHOC from 'components/HOCs/icon.hoc';
import { cn } from 'packages/utils/cn';
import type { BaseSocialMedia } from 'src/types/configs';

export default function HOC(v: BaseSocialMedia) {
  const IconComponent = IconHOC(v.icon);
  const NewAnchor = ({ className, ...props }: Omit<AnchorProps, 'children'>) => (
    <PlainAnchor
      className={cn(
        `flex items-center gap-x-2 text-sm font-light dark:font-extralight group`,
        className
      )}
      href={v.href}
      aria-label={v.ariaLabel}
      {...props}>
      <IconComponent className="h-5 w-5" />
      <span>{`Follow on`}</span>
      <span
        className="font-semibold text-indigo-700
        hover:lg:underline lg:underline-offset-2 cursor-pointer">
        {v.display}
      </span>
    </PlainAnchor>
  );
  return NewAnchor;
}
