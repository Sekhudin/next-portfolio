import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type * from 'src/types/component';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
