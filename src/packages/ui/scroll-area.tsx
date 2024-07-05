'use client';
import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from "packages/utils/cn"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    scrollCaptureY?: (lastTop: number, currentTop: number) => void;
    VPClassName?: string;
  }
>(({ className, children, VPClassName, scrollCaptureY, ...props }, ref) => {
  const [top, setTop] = React.useState<number>(0);

  const scrollYHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const currentTop: number = event.currentTarget.scrollTop;
    if (scrollCaptureY) {
      scrollCaptureY(top, currentTop);
    }
    const tresholdMatch = top - currentTop <= -10 || top - currentTop >= 10 || currentTop === 0;
    if (tresholdMatch) {
      setTop(currentTop);
    }
  };

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}>
      <ScrollAreaPrimitive.Viewport
        className={cn('h-full w-full rounded-lg', VPClassName)}
        onScrollCapture={scrollYHandler}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
