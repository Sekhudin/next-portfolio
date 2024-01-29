import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'src/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import useAsyncTask from 'src/hooks/use-async-task';
import { onInvalid, UseForm } from 'src/utils/lib/hook-form';
import Email, {
  INQUIRY_TIME_FRAME,
  type InquiryForm,
  type InquiryTimeFrame,
} from 'src/service/emailjs';
import Str from 'src/utils/string';

type FieldName = keyof InquiryForm;
const schema = z.object({
  name: z.string().min(1, { message: 'required' }).transform(Str.toTitleCase),
  email: z.string().email().toLowerCase().trim(),
  entity: z.string().trim().optional(),
  timeFrame: z.enum(INQUIRY_TIME_FRAME),
  brief: z.string().min(20).transform(Str.toCapitalFirst),
});

const defaultValues: InquiryForm = {
  name: '',
  email: '',
  timeFrame: 'undecided',
  brief: '',
  entity: '',
};

type UseInquiry = UseForm<InquiryForm>;
function useSendInquiry(): UseInquiry {
  const { loading, setLoading, setError } = useAsyncTask();
  const form = useForm<InquiryForm>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit: UseInquiry['onSubmit'] = async (v) => {
    try {
      setLoading(true);
      const result = await Email.sendInquiry(v);
      form.reset(defaultValues);
      toast({
        variant: 'success',
        title: result.text,
        description: 'Email sent successfully',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { form, onSubmit, onInvalid, loading };
}

export type { InquiryForm, InquiryTimeFrame, FieldName };
export { INQUIRY_TIME_FRAME };
export default useSendInquiry;
