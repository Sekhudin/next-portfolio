export type MapCallbackfn<T extends unknown, U extends any = any> = (
  value: T,
  index: number,
  array: T[]
) => U;

export type ErrorCallback<T extends unknown = unknown> = (error: T) => void;
