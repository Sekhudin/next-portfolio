import SendInquiryForm from 'src/components/organisms/form/send-inquiry/form';
import { cn, PropsWithClassName } from 'src/utils';

export default function FormSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(`w-full`, className)}>
      <SendInquiryForm />
    </div>
  );
}
