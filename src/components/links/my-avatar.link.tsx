'use client';
import React from 'react';
import { NextLink } from 'packages/ui/next-link';
import { usePathname } from 'next/navigation';
import MyAvatar from 'components/images/my-avatar.image';
import { cn, Props } from 'packages/utils/cn';

export default function MyAvatarLink({
  className,
  mainClassName,
}: Props<{ mainClassName?: string }>) {
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
    <NextLink href={linkTo} aria-label="back-to-main" scroll>
      <MyAvatar className={cn(``, className, `${isMain && mainClassName}`)} />
    </NextLink>
  );
}
