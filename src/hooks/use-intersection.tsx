import { type RefObject, useEffect, useState } from 'react';
import Loader from 'src/components/atoms/loader/insection';

interface Args extends IntersectionObserverInit {
  freeZeOnceVisible?: boolean;
}

const defaultArgs: Args = {
  threshold: 0,
  root: null,
  rootMargin: '0%',
  freeZeOnceVisible: false,
};

const useIntersection = (ref: RefObject<Element>, args: Args = defaultArgs) => {
  const { threshold, root, rootMargin, freeZeOnceVisible } = args;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freeZeOnceVisible;

  const updateEntry = ([_entry]: IntersectionObserverEntry[]) => {
    setEntry(_entry);
  };

  useEffect(() => {
    const node = ref.current;
    const hasIOSupport = Boolean(window.IntersectionObserver);
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return { entry, Loader };
};

export type _UseInsterSectionDI = typeof useIntersection;
export default useIntersection;
