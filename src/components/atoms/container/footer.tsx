import { Separator } from 'src/components/ui/separator';
import { cn, PropsWithChildren } from 'src/utils';

export default function ContainerFooter({ children, className }: PropsWithChildren) {
  return (
    <div className={cn(`flex justify-center sm:px-8 lg:px-14 pb-16`)}>
      <div className={cn(`w-full max-w-3xl lg:max-w-6xl flex flex-col items-center`)}>
        <Separator className="mb-10" />
        <div className={cn(`w-full max-w-2xl lg:max-w-5xl`, className)}>{children}</div>
      </div>
    </div>
  );
}
