import { Anchor, AnchorProps } from 'src/components/atoms/typography/p';
import { cn, PropsWithClassName } from 'src/utils';
import { HASHNODE } from 'src/config/anchor';

export default function AnchorToHashnode({
  className,
  ...props
}: PropsWithClassName<Omit<AnchorProps, 'children' | 'href'>>) {
  return (
    <Anchor
      href={HASHNODE.href}
      target="_blank"
      className={cn(`first-letter:uppercase`, className)}
      {...props}>
      {HASHNODE.name}
    </Anchor>
  );
}
