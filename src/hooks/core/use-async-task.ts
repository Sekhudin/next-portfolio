'use client';
import React from 'react';
import useError, { type ErrorState } from './use-error';

type UseAsyncTask = () => AsyncState;
type AsyncState = {
  loading: boolean;
  setLoading: (v: boolean) => void;
} & ErrorState;

const useAsyncTask: UseAsyncTask = () => {
  const [loading, setLoading] = React.useState<AsyncState['loading']>(false);
  const { error, setError } = useError();

  const setLoadingHander: AsyncState['setLoading'] = React.useCallback((v) => {
    setLoading(v);
  }, []);

  return {
    loading,
    setLoading: setLoadingHander,
    error,
    setError,
  };
};

export type { UseAsyncTask };
export default useAsyncTask;
