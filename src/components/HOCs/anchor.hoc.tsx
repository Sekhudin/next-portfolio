import { Anchor, AnchorProps } from 'components/typography/p';
import { cn, Props } from 'packages/utils/cn';
import type { BaseAnchor } from 'src/types/configs';

type AnchorHOC = Props<Omit<AnchorProps, 'children'>>;
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
