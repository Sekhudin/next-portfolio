import type React from 'react';
import type { useRouter } from 'next/navigation';

export type _UseStateDI = typeof React.useState;
export type _UseEffectDI = typeof React.useEffect;
export type _UseRouterDI = typeof useRouter;

export type * from 'src/hooks/use-query';
export type * from 'src/hooks/use-suspense-query';
