'use client';
import React from 'react';

type BounceFunc<T extends unknown> = (p?: any) => T;
type SetBounce = (e?: any) => () => void;
type DebounceState<T extends unknown> = {
  data: T | null;
  setBounce: SetBounce;
};
const useDebounce = <T extends unknown>(
  bounceFunction: BounceFunc<T>,
  time?: number
): DebounceState<T> => {
  const timeout: number = time || 2000;
  const [data, setData] = React.useState<T | null>(null);

  const setBounce = React.useCallback(
    (e?: any) => {
      let timmerOut: NodeJS.Timeout | null = null;
      timmerOut = setTimeout(() => {
        if (e) {
          const result = bounceFunction(e);
          if (result) {
            setData(result);
          }
        }
      }, timeout);

      return () => {
        if (timmerOut) {
          clearTimeout(timmerOut);
        }
      };
    },
    [bounceFunction, timeout]
  );

  React.useEffect(() => {
    setBounce();
  }, [setBounce]);

  return { data, setBounce };
};

export type { BounceFunc };
export default useDebounce;
