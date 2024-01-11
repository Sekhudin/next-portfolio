import { PlainAnchor, type AnchorProps } from 'src/components/atoms/typography/p';
import ICON from 'src/components/atoms/hoc/icon';
import type { BaseContact } from 'src/config/types';
import { cn } from 'src/utils';

export default function HOC(v: BaseContact) {
  const IconComponent = ICON(v.icon);
  const NewAnchor = ({ className, ...props }: Omit<AnchorProps, 'children'>) => (
    <PlainAnchor
      className={cn(
        `flex items-center gap-x-2 text-sm font-normal dark:font-extralight group`,
        className
      )}
      href={v.href}
      aria-label={v.ariaLabel}
      {...props}>
      <IconComponent className="h-5 w-5" />
      <span>{v.display}</span>
    </PlainAnchor>
  );
  return NewAnchor;
}
