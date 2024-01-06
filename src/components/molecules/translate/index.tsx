import { Button } from 'src/components/ui/button';
import { cn, PropsWithClassName } from 'src/utils';

export default function Translate({ className }: PropsWithClassName) {
  return (
    <Button
      className={cn(`p-2 rounded-full`, className)}
      size="fit"
      variant="outline"
      outlineFor="dark">
      <p className="h-6 w-6 flex items-center justify-center">ID</p>
    </Button>
  );
}
