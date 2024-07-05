import { useApolloQuery } from 'packages/graphql';
import type { UseApollloQueryFunc, SuspenseQueryHookOptions } from 'packages/graphql/types';

const defaultOptions: SuspenseQueryHookOptions<unknown, any> = {
  errorPolicy: 'all',
};

const useQuery: UseApollloQueryFunc = (query, options) => {
  const { error, data, ...result } = useApolloQuery(query, {
    ...defaultOptions,
    ...options,
  });
  return { error, data, ...result };
};

export default useQuery;
