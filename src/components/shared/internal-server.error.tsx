import React from 'react';
import { NextLink } from 'packages/ui/next-link';
import { ShieldAlert } from 'lucide-react';
import { Button } from 'packages/ui/button';
import { H3 } from 'components/typography/h';
import { cn, Props, WithErrorPage } from 'packages/utils/cn';

const InternalServerError = ({ className, error, reset }: Props<WithErrorPage>) => {
  return (
    <div className={cn(`w-full h-96 flex items-center justify-center`, className)}>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <ShieldAlert className="w-20 h-20 stroke-indigo-600/50" />
        <H3>Something Went Wrong</H3>
        <NextLink href="/" scroll>
          <Button className="px-6">Back to Main</Button>
        </NextLink>
      </div>
    </div>
  );
};

export default InternalServerError;
