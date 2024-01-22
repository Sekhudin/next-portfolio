import * as React from 'react';

import { cn } from 'src/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-9 w-full rounded-md px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:font-light disabled:cursor-not-allowed disabled:opacity-50
          bg-transparent dark:bg-secondary/50 border border-input dark:border-zinc-600/50 focus:outline-none
          focus:ring-2 focus:ring-offset-1 ring-offset-background dark:ring-offset-zinc-800
          ring-indigo-700/50 dark:ring-indigo-700/70 text-zinc-800 dark:text-zinc-300`,
          className
        )}
        autoComplete="off"
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
