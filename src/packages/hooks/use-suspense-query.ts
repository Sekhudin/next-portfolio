'use client';
import React from 'react';
import { useApolloSuspenseQuery } from 'packages/graphql';
import type { UseApollloSuspenseQueryFunc, SuspenseQueryHookOptions } from 'packages/graphql/types';

const defaultOptions: SuspenseQueryHookOptions<unknown, any> = {
  errorPolicy: 'all',
};

const useSuspenseQuery: UseApollloSuspenseQueryFunc = (query, options) => {
  const { error, data, ...result } = useApolloSuspenseQuery(query, {
    ...defaultOptions,
    ...options,
  });

  return { error, data, ...result };
};

export default useSuspenseQuery;
