import { Div, PlainAnchor, SpanPoint, type AnchorProps } from 'src/components/atoms/typography/p';
import ICON from 'src/components/atoms/hoc/icon';
import { cn } from 'src/utils';
import type { BaseSocialMedia } from 'src/config/types';

export default function HOC(v: BaseSocialMedia) {
  const IconComponent = ICON(v.plainIcon);
  const NewAnchor = ({ className, ...props }: Omit<AnchorProps, 'children'>) => (
    <PlainAnchor
      className={cn(
        `flex items-center gap-x-2 text-sm font-light dark:font-extralight group`,
        className
      )}
      {...props}>
      <IconComponent className="h-5 w-5" />
      <span>{`Follow on`}</span>
      <span
        className="font-semibold text-indigo-700
        hover:lg:underline lg:underline-offset-2 cursor-pointer">
        {v.name}
      </span>
    </PlainAnchor>
  );
  return NewAnchor;
}
