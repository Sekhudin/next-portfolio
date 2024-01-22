import type {
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import { toast } from 'src/components/ui/use-toast';
import { HTTPErrorStatus, type ErrorMessage } from 'src/types/error';

export type UseForm<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  onInvalid: SubmitErrorHandler<Record<string, any>>;
  loading?: boolean;
};

export function catchInvalidForm<T extends FieldValues>(e: any): ErrorMessage {
  const error = e as FieldErrors<T>;
  const keys = Object.keys(error);
  const title = HTTPErrorStatus.BadRequest;
  let description: string = 'validation error';
  if (keys && keys[0]) {
    const fieldname = keys[0] as keyof FieldErrors<T>;
    const field = error[fieldname];
    if (field && typeof field.message === 'string') {
      description = field.message;
    }
  }
  return { title, description };
}

export const onInvalid: UseForm<Record<string, any>>['onInvalid'] = (error) => {
  const message = catchInvalidForm<Record<string, any>>(error);
  toast({ variant: 'error', ...message });
};
