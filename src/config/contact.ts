import type { BaseContact } from './types';

type WhatsappFunc = (v: string) => { waNumber: string; anchor: string };
export const whatsapp: WhatsappFunc = (v) => {
  const waNumber = v.replace(/\s/g, '');
  const anchor = `https://wa.me/${waNumber}`;
  return { waNumber, anchor };
};

export const WA: BaseContact = {
  name: 'Whatsapp',
  contact: '+62 818 0220 3863',
  tooltip: 'Sekhudin',
  alt: 'Send Message',
};

export const GMAIL: BaseContact = {
  name: 'Gmail',
  contact: 'sekhudinpbg3@gmail.com',
  tooltip: 'sekhudinpbg3@gmail.com',
  alt: 'Send Mail',
};
