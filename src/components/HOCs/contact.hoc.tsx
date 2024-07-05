import { PlainAnchor, type AnchorProps } from 'components/typography/p';
import IconHOC from 'components/HOCs/icon.hoc';
import { cn } from 'packages/utils/cn';
import type { BaseContact } from 'src/types/configs';

export default function HOC(v: BaseContact) {
  const IconComponent = IconHOC(v.icon);
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
