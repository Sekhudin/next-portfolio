import { cva, type VariantProps } from 'class-variance-authority';
import { cn, PropsWithClassName } from 'src/utils';

export type SkeletonVariant = VariantProps<typeof skeletonVariant>;
const skeletonVariant = cva('w-28 h-fit animate-pulse bg-primary/10 text-transparent select-none', {
  variants: {
    size: {
      base: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      h1: 'text-3xl lg:text-4xl font-bold',
      h2: 'text-2xl font-semibold',
    },
    rounded: {
      rounded: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'sm',
    rounded: 'md',
  },
});

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10 select-none', className)}
      {...props}
    />
  );
}

function SkeletonText({
  className,
  size,
  rounded,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & SkeletonVariant) {
  return (
    <p className={cn(skeletonVariant({ size, rounded, className }))} {...props}>
      x
    </p>
  );
}

function SkeletonParagraph({
  className,
  diffLast,
  childClassName,
  n,
  ...props
}: PropsWithClassName<
  SkeletonVariant & { n: number; childClassName?: string; diffLast?: boolean }
>) {
  return (
    <div className={cn('flex flex-col gap-y-2', className)}>
      {Array.from({ length: n }).map((_, key) => (
        <SkeletonText className={cn('w-full', childClassName)} key={key} {...props} />
      ))}
      {diffLast && <SkeletonText className={cn('w-[40%]', childClassName)} {...props} />}
    </div>
  );
}

export { Skeleton, SkeletonText, SkeletonParagraph };
