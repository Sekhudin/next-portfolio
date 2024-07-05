/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import type { UseUpdatedFunc } from 'types/hooks';

const useUpdated: UseUpdatedFunc = (callback, deps) => {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) return callback();
    else mounted.current = true;
  }, deps);
};
export default useUpdated;
