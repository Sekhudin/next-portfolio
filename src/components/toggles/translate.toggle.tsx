'use client';
import { Span } from 'components/typography/p';
import { Button } from 'packages/ui/button';
import { toast } from 'packages/ui/use-toast';
import { cn, Props } from 'packages/utils/cn';

export default function TranslateToggle({ className }: Props) {
  const onClickHandler = () => {
    toast({
      variant: 'info',
      title: 'Info',
      description: 'Not yet available',
    });
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
