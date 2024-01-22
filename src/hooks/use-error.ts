'use client';
import React from 'react';
import { toast } from 'src/components/ui/use-toast';
import { catchError, ErrorMessage } from 'src/utils/exception';

type UseError = () => ErrorState;
export type ErrorState = {
  error: ErrorMessage | null;
  setError: (e: unknown) => void;
};

const useError: UseError = () => {
  const [error, setError] = React.useState<ErrorState['error']>(null);

  const setErrorHandler: ErrorState['setError'] = React.useCallback((e) => {
    const { message } = catchError(e);
    setError(message);
  }, []);

  React.useEffect(() => {
    let errorToast: ReturnType<typeof toast>;
    if (error) {
      errorToast = toast({ variant: 'error', ...error });
    }

    return () => {
      if (errorToast) {
        errorToast.dismiss();
      }
    };
  }, [error]);

  return {
    error,
    setError: setErrorHandler,
  };
};

export default useError;
