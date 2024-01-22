import React from 'react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'src/components/ui/tooltip';
import { Anchor, AnchorProps } from 'src/components/atoms/typography/p';
import ICON from 'src/components/atoms/icon/rounded-hoc';
import type { BaseSocialMedia } from 'src/config/types';
import { cn, PropsWithClassName } from 'src/utils';

type NewAnchorProps = PropsWithClassName & Omit<AnchorProps, 'children'>;
export default function HOC(v: BaseSocialMedia) {
  const IconElement = ICON(v.icon);
  const NewAnchor = ({ className, ...props }: NewAnchorProps) => (
    <TooltipProvider delayDuration={300}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild className={cn(`group`)}>
          <Anchor href={v.href} aria-label={v.ariaLabel} {...props}>
            <IconElement className={cn(`dark:h-5 dark:w-5`, className)} />
          </Anchor>
        </TooltipTrigger>
        <TooltipContent className="invisible lg:visible mb-2">{v.tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
  return NewAnchor;
}
