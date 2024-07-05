import { Separator } from 'packages/ui/separator';
import { cn, Props, WithChildren } from 'packages/utils/cn';

export default function FooterContainer({ children, className }: Props<WithChildren>) {
  return (
    <div className={cn(`flex justify-center sm:px-8 lg:px-14 pb-16`)}>
      <div className={cn(`w-full max-w-3xl lg:max-w-6xl flex flex-col items-center`)}>
        <Separator className="mb-10" />
        <div className={cn(`w-full max-w-2xl lg:max-w-5xl`, className)}>{children}</div>
      </div>
    </div>
  );
}
