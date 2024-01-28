import * as React from 'react';

import { cn } from 'src/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[60px] w-full rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50
          bg-transparent dark:bg-secondary/30 border border-zinc-300 dark:border-zinc-600/50 focus:outline-none
          focus:ring-2 focus:ring-offset-1 ring-offset-background dark:ring-offset-zinc-800
          ring-indigo-700/50 dark:ring-indigo-700/70 text-zinc-800 dark:text-zinc-300`,
          className
        )}
        ref={ref}
        rows={6}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
