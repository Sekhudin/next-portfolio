import { cn, PropsWithClassName } from 'src/utils';
import { FOOTER } from 'src/config/link';
import NavigationItem from './navigation-item';

export default function NavigationFooter({ className }: PropsWithClassName) {
  return (
    <div className={cn(`flex items-center space-x-1.5`, className)}>
      {FOOTER.map((v, key) => (
        <NavigationItem key={key} href={v.href} className="p-1.5">
          {v.name}
        </NavigationItem>
      ))}
    </div>
  );
}
