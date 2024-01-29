import { Anchor, AnchorProps } from 'src/components/atoms/typography/p';
import type { BaseAnchor } from 'src/config/types';
import { cn, PropsWithClassName } from 'src/utils';

type AnchorHOC = PropsWithClassName<Omit<AnchorProps, 'children'>>;
export default function HOC(v: BaseAnchor) {
  const NewAnchor = ({ className, ...props }: AnchorHOC) => (
    <Anchor
      className={cn(`first-letter:uppercase`, className)}
      href={v.href}
      aria-label={v.ariaLabel}
      {...props}>
      {v.display}
    </Anchor>
  );
  return NewAnchor;
}
