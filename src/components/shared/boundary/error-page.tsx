'use client';
import React from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { H3 } from 'src/components/atoms/typography/h';
import useError from 'src/hooks/use-error';

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const { setError } = useError();
  React.useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <ShieldAlert className="w-20 h-20 stroke-pink-600/50" />
        <H3>Something Went Wrong</H3>
        <Link href="/" scroll>
          <Button className="px-6">Back to Main</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
