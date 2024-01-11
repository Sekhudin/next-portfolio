import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseForm } from 'src/utils/hooks-form/types';
import schema, { defaultValues, type Schema } from './send.schema';

export default function useSendInquiry(): UseForm<Schema> {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = () => {};

  const onInvalid = () => {};

  return { form, onSubmit, onInvalid, loading: false };
}
