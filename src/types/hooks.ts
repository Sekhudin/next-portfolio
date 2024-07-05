import type React from 'react';
import type { RefObject } from 'react';

export type UseUpdatedFunc = (cb: React.EffectCallback, deps: React.DependencyList) => void;

export interface UseIntersectionObserverArgs extends IntersectionObserverInit {
  freeZeOnceVisible?: boolean;
}

export type UseIntersectionObserverFunc = (
  ref: RefObject<Element>,
  args?: UseIntersectionObserverArgs
) => IntersectionObserverEntry | undefined;
