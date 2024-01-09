import type { LucideIcon } from 'lucide-react';
import { type HOCIcon } from 'src/components/atoms/hoc/rounded-icon';

export type BaseSocialMedia = BaseAnchor & {
  plainIcon: LucideIcon;
  IconComponent: HOCIcon;
};
export type BaseContact = Omit<BaseAnchor, 'href'> & { contact: string };
export type BaseLink = BaseAnchor;
export type BaseAnchor = {
  name: string;
  href: string;
  alt: string;
  tooltip: string;
};
