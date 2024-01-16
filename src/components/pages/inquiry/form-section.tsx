import SendInquiryForm from 'src/components/organisms/form/inquiry/send';
import { cn, PropsWithClassName } from 'src/utils';

export default function FormSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(``, className)}>
      <SendInquiryForm />
    </div>
  );
}