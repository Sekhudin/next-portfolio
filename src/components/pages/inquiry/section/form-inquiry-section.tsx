import SendInquiryForm from 'src/components/organisms/form/inquiry/send';
import { cn, PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<Deps<'deps', typeof SendInquiryForm>>;
export default function FormInquirySection({ className, deps }: Props) {
  return (
    <div className={cn(`w-full`, className)}>
      <SendInquiryForm deps={deps} />
    </div>
  );
}
