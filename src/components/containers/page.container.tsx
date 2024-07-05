import { cn, Props } from 'packages/utils/cn';

export const GapContainerTop = ({ className }: Props) => <div className={cn(`h-32`, className)} />;

export const GapDynamicTop = ({ className }: Props) => (
  <div className={cn(`h-16 sm:h-32`, className)} />
);

export const GapContainerBottom = ({ className }: Props) => (
  <div className={cn(`h-24`, className)} />
);

export default function PageContainer({
  children,
  header,
  footer,
  className,
  ...props
}: Props<React.HTMLAttributes<HTMLDivElement>> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="grow flex flex-col items-center px-4 sm:px-16 lg:px-28">
      <div className={cn(`w-full max-w-2xl lg:max-w-5xl`, className)} {...props}>
        {header}
        {children}
        {footer}
      </div>
    </div>
  );
}
