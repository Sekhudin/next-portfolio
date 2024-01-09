import { MessageCircleMoreIcon } from 'lucide-react';
import { cn, PropsWithClassName } from 'src/utils';
import { WA } from 'src/config/contact';
import HOC from './contact-hoc';

const AnchorWhatsapp = HOC(MessageCircleMoreIcon, WA);
export default function ContactWhatsapp({ className }: PropsWithClassName) {
  return <AnchorWhatsapp href="/" className={cn(``, className)} />;
}
