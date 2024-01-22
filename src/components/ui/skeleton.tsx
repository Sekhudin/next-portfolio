import { cn } from 'src/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />;
}

function SkeletonTextXL({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'animate-pulse rounded-md bg-primary/10 text-transparent text-lg w-28',
        className
      )}
      {...props}>
      x
    </p>
  );
}

function SkeletonTextSM({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'animate-pulse rounded-md bg-primary/10 text-transparent text-xs w-28',
        className
      )}
      {...props}>
      x
    </p>
  );
}

export { Skeleton, SkeletonTextSM, SkeletonTextXL };
