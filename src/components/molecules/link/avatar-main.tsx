'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Avatar from 'src/components/atoms/image/avatar';
import { cn, PropsWithClassName } from 'src/utils';

export default function AvatarMain({
  className,
  mainClassName,
}: PropsWithClassName<{ mainClassName?: string }>) {
  const [linkTo, setLinkTo] = React.useState<'/' | '/about'>('/');
  const pathname = usePathname();
  const isMain: boolean = pathname === '/';

  React.useEffect(() => {
    if (isMain) {
      setLinkTo('/about');
    } else {
      setLinkTo('/');
    }
  }, [isMain]);

  return (
    <Link href={linkTo} aria-label="back-to-main" scroll>
      <Avatar className={cn(``, className, `${isMain && mainClassName}`)} />
    </Link>
  );
}
