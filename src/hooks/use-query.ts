'use client';
import React from 'react';
import {
  useQuery as useApolloQuery,
  type OperationVariables,
  type DocumentNode,
  type TypedDocumentNode,
  type QueryHookOptions,
  type NoInfer,
  type QueryResult,
} from '@apollo/client';
import useError from './use-error';

const useQuery = <
  TData extends Record<string, any>,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
): QueryResult<TData, TVariables> => {
  const { data, loading, error, ...other } = useApolloQuery<TData, TVariables>(query, options);
  const { setError } = useError();

  React.useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error, setError]);

  return { data, loading, ...other };
};

export default useQuery;
