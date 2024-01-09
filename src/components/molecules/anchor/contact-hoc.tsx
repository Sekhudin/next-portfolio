import type { LucideIcon } from 'lucide-react';
import { PlainAnchor, type AnchorProps } from 'src/components/atoms/typography/p';
import ICON from 'src/components/atoms/hoc/icon';
import { cn } from 'src/utils';
import type { BaseContact } from 'src/config/types';

export default function HOC(icon: LucideIcon, v: BaseContact) {
  const IconComponent = ICON(icon);
  const NewAnchor = ({ className, ...props }: Omit<AnchorProps, 'children'>) => (
    <PlainAnchor
      className={cn(
        `flex items-center gap-x-2 text-sm font-normal dark:font-extralight group`,
        className
      )}
      {...props}>
      <IconComponent className="h-5 w-5" />
      <span>{v.contact}</span>
    </PlainAnchor>
  );
  return NewAnchor;
}
