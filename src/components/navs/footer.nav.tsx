import { cn, Props } from 'packages/utils/cn';
import { FOOTER } from 'configs/link.config';
import Item from './item';

export default function FooterNav({ className }: Props) {
  return (
    <div className={cn(`flex items-center space-x-1.5`, className)}>
      {FOOTER.map((link, key) => (
        <Item className="p-1.5" key={key} href={link.href} {...link.options}>
          {link.display}
        </Item>
      ))}
    </div>
  );
}
