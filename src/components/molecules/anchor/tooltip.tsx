import React from 'react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'src/components/ui/tooltip';
import { Anchor, AnchorProps } from 'src/components/atoms/typography/p';
import { cn, PropsWithChildren } from 'src/utils';

export default function AnchorTooltip({
  tooltip,
  children,
  className,
  ...props
}: PropsWithChildren<{ tooltip: string } & AnchorProps>) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild className={cn(``)}>
          <Anchor className={cn(``, className)} {...props}>
            {children}
          </Anchor>
        </TooltipTrigger>
        <TooltipContent className="invisible lg:visible mb-2">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
