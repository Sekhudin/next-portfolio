import { type ClassValue, clsx } from 'clsx';
import type { HTMLAttributeAnchorTarget } from 'react';
import { twMerge } from 'tailwind-merge';
export type * from 'src/types/component';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hrefTo = (href?: string | null, target?: HTMLAttributeAnchorTarget) => {
  if (href) {
    if (target) {
      window.open(href, target);
      return;
    }
    window.location.href = href;
    return;
  }
};
