'use client';
import { Button } from 'src/components/ui/button';
import { Span } from 'src/components/atoms/typography/p';
import { cn, PropsWithClassName } from 'src/utils';

export default function Translate({ className }: PropsWithClassName) {
  const onClickHandler = () => {
    // eslint-disable-next-line no-alert
    alert('Not yet available');
  };
  return (
    <Button
      className={cn(`p-2 rounded-full`, className)}
      size="fit"
      variant="outline"
      outlineFor="dark"
      onClick={onClickHandler}>
      <Span className="h-6 w-6 flex items-center justify-center font-normal">EN</Span>
    </Button>
  );
}
