import { ContactGmail, ContactWhatsapp } from 'src/components/atoms/anchor/contact';
import { cn, PropsWithClassName } from 'src/utils';

export default function ContactSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(`flex flex-col space-y-2`, className)}>
      <ContactGmail />
      <ContactWhatsapp />
    </div>
  );
}
