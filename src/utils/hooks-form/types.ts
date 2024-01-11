import { UseFormReturn, SubmitHandler, SubmitErrorHandler, FieldValues } from 'react-hook-form';

export type UseForm<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  onInvalid: SubmitErrorHandler<T>;
  loading?: boolean;
};
