import type { LucideIcon } from 'lucide-react';

export type InquiryTimeFrame = '2 Weeks' | '1-3 Months' | '> 3 Months' | 'undecided';
export type BaseContact = BaseAnchor & { icon: LucideIcon, contact: string };
export type BaseLink = BaseAnchor;
export type BaseSocialMedia = BaseAnchor & { icon: LucideIcon };
export type BaseTools = {
  title: string;
  stacks: Omit<BaseAnchor & { sub: string }, 'tooltip'>[];
};
export type BaseAnchor = {
  display: string;
  href: string;
  tooltip: string;
  ariaLabel: string;
};

export type BaseWorkService = {
  title: string;
  services: string[];
};
