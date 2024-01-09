import { MessageCircleMoreIcon } from 'lucide-react';
import { cn, PropsWithClassName } from 'src/utils';
import { WA, whatsapp } from 'src/config/contact';
import HOC from './contact-hoc';

const AnchorWhatsapp = HOC(MessageCircleMoreIcon, WA);
export default function ContactWhatsapp({ className }: PropsWithClassName) {
  const wa = whatsapp(WA.contact);
  return <AnchorWhatsapp className={cn(``, className)} href={wa.anchor} target="_blank" />;
}
