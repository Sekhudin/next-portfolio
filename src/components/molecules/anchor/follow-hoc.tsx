import { PlainAnchor, type AnchorProps } from 'src/components/atoms/typography/p';
import ICON from 'src/components/atoms/hoc/icon';
import { cn } from 'src/utils';
import type { BaseSocialMedia } from 'src/config/types';

export default function HOC(v: BaseSocialMedia) {
  const IconComponent = ICON(v.plainIcon);
  const NewAnchor = ({ className, ...props }: Omit<AnchorProps, 'children'>) => (
    <PlainAnchor
      className={cn(
        `flex items-center gap-x-2 text-sm font-medium dark:font-light group`,
        className
      )}
      {...props}>
      <IconComponent className="m-2 group-hover:fill-indigo-700/40" />
      <span>{v.alt}</span>
    </PlainAnchor>
  );
  return NewAnchor;
}
