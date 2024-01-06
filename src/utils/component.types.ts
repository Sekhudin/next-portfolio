import type React from 'react';

export type PropsWithChildren<P = unknown> = React.PropsWithChildren<P & { className?: string }>;
export type PropsWithClassName<P = unknown> = P & { className?: string };
