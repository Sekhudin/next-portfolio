import SendInquiryForm from 'src/components/organisms/form/inquiry/send';
import useForm, { formResolver } from 'src/hooks/use-form';
import { cn, PropsWithClassName } from 'src/utils';

export default function FormSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(`w-full`, className)}>
      <SendInquiryForm deps={{ useForm, formResolver }} />
    </div>
  );
}
