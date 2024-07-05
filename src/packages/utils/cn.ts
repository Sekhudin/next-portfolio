import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva, type VariantProps } from 'class-variance-authority';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type * from 'types/global';
export type { VariantProps };
export { cn, cva };
