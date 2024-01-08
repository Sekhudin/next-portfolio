import { cn, PropsWithChildren } from 'src/utils';

export default function Container({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className="grow min-h-fit flex justify-center px-4 sm:px-16 lg:px-28">
      <div className={cn(`w-full max-w-2xl lg:max-w-5xl`, className)} {...props}>
        {children}
      </div>
    </div>
  );
}
