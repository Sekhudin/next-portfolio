import { MailIcon, MessageCircleMoreIcon } from 'lucide-react';
import { CONTACT } from 'configs/env.config';
import type { BaseContact } from 'src/types/configs';

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

const wa = whatsapp(CONTACT.WA);
export const WA: BaseContact = {
  icon: MessageCircleMoreIcon,
  contact: wa.contact,
  display: wa.display,
  href: wa.href,
  tooltip: 'Sekhudin',
  ariaLabel: 'Send Message',
};

const gmail = email(CONTACT.EMAIL);
export const GMAIL: BaseContact = {
  icon: MailIcon,
  contact: gmail.contact,
  display: gmail.display,
  href: gmail.href,
  tooltip: 'sekhudinpbg3@gmail.com',
  ariaLabel: 'Send Mail',
};
