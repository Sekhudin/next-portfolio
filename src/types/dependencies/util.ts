import type React from 'react';
import type { useRouter } from 'next/navigation';
import type { toast } from 'src/components/ui/use-toast';
import type { hrefTo } from 'src/utils/component';

export type _RouteDI = ReturnType<typeof useRouter>;
export type _ToastDI = typeof toast;
export type _HrefToDI = typeof hrefTo;
export type _SuspenseComponentDI = typeof React.Suspense;
