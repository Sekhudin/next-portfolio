'use client';
import React from 'react';
import {
  useSuspenseQuery as useApolloQuery,
  type OperationVariables,
  type DocumentNode,
  type TypedDocumentNode,
  type SuspenseQueryHookOptions,
  type NoInfer,
  type UseSuspenseQueryResult,
} from '@apollo/client';
import useError from './core/use-error';

const useSuspenseQuery = <TData, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
): UseSuspenseQueryResult<TData, TVariables> => {
  const { setError } = useError();
  const { data, error, ...other } = useApolloQuery<TData, TVariables>(query, options);

  React.useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, data, setError]);

  return { data, error, ...other };
};

export type _UseApolloSuspenseQueryDI = typeof useSuspenseQuery;

export default useSuspenseQuery;
