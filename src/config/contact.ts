import { MailIcon, MessageCircleMoreIcon } from 'lucide-react';
import type { BaseContact } from './types';

type WhatsappFunc = (v: string) => { display: string; href: string; contact: string };
const whatsapp: WhatsappFunc = (display) => {
  const contact = display.replace(/\s/g, '');
  const href = `https://wa.me/${contact}`;
  return { display, href, contact };
};

type EmailFunc = (v: string) => { display: string; href: string; contact: string };
const email: EmailFunc = (display) => {
  const contact = display.toLowerCase().trim();
  const href = `mailto:${contact}`;
  return { display, href, contact };
};

const wa = whatsapp('+62 818 0220 3863');
export const WA: BaseContact = {
  display: wa.display,
  href: wa.href,
  tooltip: 'Sekhudin',
  ariaLabel: 'Send Message',
  icon: MessageCircleMoreIcon,
};

const gmail = email('sekhudinpbg3@gmail.com');
export const GMAIL: BaseContact = {
  display: gmail.display,
  href: gmail.href,
  tooltip: 'sekhudinpbg3@gmail.com',
  ariaLabel: 'Send Mail',
  icon: MailIcon,
};
