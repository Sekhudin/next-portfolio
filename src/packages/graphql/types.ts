import type {
  OperationVariables,
  DocumentNode,
  TypedDocumentNode,
  SuspenseQueryHookOptions,
  UseSuspenseQueryResult,
  QueryHookOptions,
  QueryResult,
  NoInfer,
  SkipToken
} from '@apollo/client';

export type * from '@apollo/client';

export type UseApollloQueryFunc = <
  TData extends Record<string, any> = Record<string, any>,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => QueryResult<TData, TVariables>;

export type UseApollloSuspenseQueryFunc = <
  TData extends Record<string, any> = Record<string, any>,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => UseSuspenseQueryResult<TData, TVariables>;
