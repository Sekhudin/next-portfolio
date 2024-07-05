import type React from 'react';
import type { NextFont, NextFontWithVariable } from 'next/dist/compiled/@next/font';

export type Props<P = unknown> = P & { className?: string };
export type PropsHTML<T extends unknown> = React.HTMLAttributes<T>;
export type PropsFrom<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  P extends Record<string, any> = {}
> = React.ComponentProps<T> & P;
export type PickPropsFrom<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  K extends keyof React.ComponentProps<T>
> = Pick<React.ComponentProps<T>, K>;
export type JSXComponent<P = unknown> = (p: Props<P>) => React.JSX.Element;

export type Children = React.ReactNode;

export type WithChildren = { children: React.ReactNode };
export type OmitChildren<T extends Record<string, any>> = Omit<T, 'children'>;
export type WithSkeleton = { skeletonClass?: string };
export type WithSkeletonList = { nSkeleton: number };
export type WithSkeletons = { nSkeleton: number; skeletonClass?: string };
export type WithParams<T extends string = string> = {
  params: Record<T, string>;
};

export type WithErrorPage = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type NextLayoutProps<
  T extends string | null = null,
  V extends Record<string, any> = Record<string, any>
> = T extends string ? Readonly<Record<T, Children> & V> : Readonly<WithChildren & V>;

export interface NextPageProps<T extends string, S extends string = string> {
  params: Record<T, string>;
  searchParams: Record<S, string>;
}

export type PageParams<T extends string = string> = {
  params: Record<T, string>;
};

export type Font = NextFont | NextFontWithVariable;
