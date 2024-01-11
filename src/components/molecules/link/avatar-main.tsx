'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Avatar from 'src/components/atoms/image/avatar';
import { cn, PropsWithClassName } from 'src/utils';

export default function AvatarMain({
  className,
  mainClassName,
}: PropsWithClassName<{ mainClassName?: string }>) {
  const pathname = usePathname();
  const isMain: boolean = pathname === '/';

  return (
    <Link href="/" aria-label="back-to-main" scroll>
      <Avatar className={cn(``, className, `${isMain && mainClassName}`)} />
    </Link>
  );
}
