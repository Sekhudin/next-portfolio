import { cn, Props } from 'packages/utils/cn';
import { FOOTER } from 'configs/link.config';
import Item from './item';

export default function FooterNav({ className }: Props) {
  return (
    <div className={cn(`flex items-center space-x-1.5`, className)}>
      {FOOTER.map((v, key) => (
        <Item key={key} href={v.href} className="p-1.5">
          {v.display}
        </Item>
      ))}
    </div>
  );
}
