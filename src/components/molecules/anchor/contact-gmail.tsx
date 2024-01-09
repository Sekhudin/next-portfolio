import { MailIcon } from 'lucide-react';
import { cn, PropsWithClassName } from 'src/utils';
import { GMAIL } from 'src/config/contact';
import HOC from './contact-hoc';

const AnchorGmail = HOC(MailIcon, GMAIL);
export default function ContactGmail({ className }: PropsWithClassName) {
  return <AnchorGmail href="/" className={cn(``, className)} />;
}
