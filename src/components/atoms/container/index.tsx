import { cn, PropsWithChildren, PropsWithClassName } from 'src/utils';

export const ContainerGapTop = ({ className }: PropsWithClassName) => (
  <div className={cn(`h-36`, className)} />
);

export const ContainerGapBottom = ({ className }: PropsWithClassName) => (
  <div className={cn(`h-24`, className)} />
);

export default function Container({
  children,
  header,
  footer,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
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
