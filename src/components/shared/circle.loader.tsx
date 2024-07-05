import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn, Props } from 'packages/utils/cn';

const CircleLoader = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <div className={cn(`mt-32`, className)}>
      <div ref={ref}>
        <Loader2 className="stroke-indigo-700 animate-spin" />
      </div>
    </div>
  );
});
CircleLoader.displayName = 'CircleLoader';
export default CircleLoader;
