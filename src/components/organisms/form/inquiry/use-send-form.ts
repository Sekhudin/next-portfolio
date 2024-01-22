import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAsyncTask from 'src/hooks/use-async-task';
import { TIME_FRAME as TFRAME } from 'src/config/work-service';
import { onInvalid, UseForm } from 'src/utils/hook-form';
import Str from 'src/utils/string';

const [tf, ...tframe] = TFRAME;
export const TIME_FRAME = [tf, ...tframe] as const;
export type Schema = z.infer<typeof schema>;
export type FieldName = keyof Schema;
const schema = z.object({
  name: z.string().min(1, { message: 'required' }).transform(Str.toTitleCase),
  email: z.string().email().toLowerCase().trim(),
  entity: z.string().trim().optional(),
  timeFrame: z.enum(TIME_FRAME),
  brief: z.string().min(20).transform(Str.toCapitalFirst),
});

const defaultValues: Schema = {
  name: '',
  email: '',
  timeFrame: 'undecided',
  brief: '',
  entity: '',
};

type UseInquiry = UseForm<Schema>;
export default function useSendInquiry(): UseInquiry {
  const { loading, setLoading, setError } = useAsyncTask();
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit: UseInquiry['onSubmit'] = (v) => {
    try {
      setLoading(true);
      // code here
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { form, onSubmit, onInvalid, loading };
}
