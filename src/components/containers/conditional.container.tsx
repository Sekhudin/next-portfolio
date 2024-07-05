import React from 'react';
import type { WithChildren, Children } from 'packages/utils/cn';

type CondtionalContainerPops = WithChildren & { isVisible: unknown; fallback?: Children };
export const NullFragment = () => <React.Fragment>{null}</React.Fragment>;
export const StripFragment = () => <div>-</div>;

const ConditionalContainer = ({
  children,
  isVisible,
  fallback = null,
}: CondtionalContainerPops) => <React.Fragment>{isVisible ? children : fallback}</React.Fragment>;

export default ConditionalContainer;
