import { Separator } from 'src/components/ui/separator';
import FollowGithub from 'src/components/molecules/anchor/follow-github';
import FollowTwitter from 'src/components/molecules/anchor/follow-twitter';
import ContactGmail from 'src/components/molecules/anchor/contact-gmail';
import ContactWhatsapp from 'src/components/molecules/anchor/contact-whatsapp';
import { cn, PropsWithClassName } from 'src/utils';

export default function ContactFollowSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(`flex flex-col gap-y-12`, className)}>
      <div className="flex flex-col space-y-2">
        <FollowGithub />
        <FollowTwitter />
      </div>
      <Separator />

      <div className="flex flex-col space-y-2">
        <ContactGmail />
        <ContactWhatsapp />
      </div>
    </div>
  );
}
