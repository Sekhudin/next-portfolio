'use client';
import React from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { cn, PropsFrom, VariantProps } from 'packages/utils/cn';
import { buttonVariants } from './button';

type onLinkClicked = React.MouseEventHandler<HTMLAnchorElement>;
export type NextLinkProps = PropsFrom<typeof Link, { disabled?: boolean }>;
const NextLink = ({ className, disabled, ...props }: NextLinkProps) => {
  const onClickHandler: onLinkClicked | undefined = disabled
    ? (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        toast.warning('Link Tidak Tersedia', { description: 'Fitur belum tersedia.' });
      }
    : props.onClick;

  return (
    <Link
      className={cn(
        'duration-300',
        `${
          disabled
            ? 'opacity-80 hover:bg-transparent group-hover:bg-transparent cursor-not-allowed'
            : ''
        }`,
        className
      )}
      onClick={onClickHandler}
      prefetch={false}
      {...props}
    />
  );
};

export type NextLinkButtonProps = PropsFrom<
  typeof Link,
  { disabled?: boolean } & VariantProps<typeof buttonVariants>
>;
const NextLinkButton = ({ className, variant, size, disabled, ...props }: NextLinkButtonProps) => {
  const onClickHandler: onLinkClicked | undefined = disabled
    ? (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        toast.warning('Link Tidak Tersedia', { description: 'Fitur belum tersedia.' });
      }
    : props.onClick;

  return (
    <Link
      className={cn(
        buttonVariants({ className, variant, size }),
        disabled
          ? 'opacity-80 hover:bg-transparent group-hover:bg-transparent cursor-not-allowed'
          : ''
      )}
      onClick={onClickHandler}
      prefetch={false}
      {...props}
    />
  );
};

export { NextLink, NextLinkButton };
