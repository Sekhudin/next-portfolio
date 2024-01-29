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
