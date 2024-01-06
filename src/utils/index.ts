import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type * from './component.types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
