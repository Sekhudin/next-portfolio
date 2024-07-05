import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from 'packages/ui/tooltip';
import { Anchor, AnchorProps } from 'components/typography/p';
import IconHOC from 'components/HOCs/icon.hoc';
import { cn, Props } from 'packages/utils/cn';
import type { BaseSocialMedia } from 'src/types/configs';

type NewAnchorProps = Props & Omit<AnchorProps, 'children'>;
export default function HOC(v: BaseSocialMedia) {
  const IconElement = IconHOC(v.icon);
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
