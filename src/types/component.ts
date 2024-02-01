import type React from 'react';

export type PropsWithChildren<P = unknown> = React.PropsWithChildren<P & { className?: string }>;
export type PropsWithClassName<P = unknown> = P & { className?: string };
export type PagePropsParams<P extends string = string> = {
  params: {
    [K in P]: string;
  };
};

export namespace Event {
  export type InputOnChange = React.ChangeEvent<HTMLInputElement>;
}

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type Deps<K extends string, T extends (...args: any) => any> = {
  [X in K]: Parameters<T>[0]['deps'];
};

export type PickDeps<T extends (...args: any) => any, K extends keyof Parameters<T>[0]['deps']> = {
  [X in K]: Parameters<T>[0]['deps'][K];
};
