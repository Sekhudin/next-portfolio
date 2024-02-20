import type React from 'react';
import type Link from 'next/link';
import type { toast } from 'src/components/ui/use-toast';
import type { hrefTo } from 'src/utils/component';

export type _ToastDI = typeof toast;
export type _HrefToDI = typeof hrefTo;
export type _LinkComponentDI = typeof Link;
export type _SuspenseComponentDI = typeof React.Suspense;
