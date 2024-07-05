import React from 'react';
import type { UseIntersectionObserverFunc, UseIntersectionObserverArgs } from 'types/hooks';

const defaultArgs: UseIntersectionObserverArgs = {
  threshold: 1.0,
  root: null,
  rootMargin: '0%',
  freeZeOnceVisible: false,
};

const useIntersectionObserver: UseIntersectionObserverFunc = (ref, args = defaultArgs) => {
  const { threshold, root, rootMargin, freeZeOnceVisible } = args;

  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freeZeOnceVisible;

  React.useEffect(() => {
    const node = ref.current;
    const hasIOSupport = Boolean(window.IntersectionObserver);
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([_entry]) => {
      setEntry(_entry);
    }, observerParams);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, frozen, ref, threshold]);

  return entry;
};

export default useIntersectionObserver;
