import type { FieldValues, FieldErrors } from 'react-hook-form';
import { HTTPErrorStatus, type ErrorMessage } from 'src/types/error';

function catchInvalidForm<TFieldValues extends FieldValues>(
  error: FieldErrors<TFieldValues>
): ErrorMessage {
  const keys = Object.keys(error);
  const title = HTTPErrorStatus.BadRequest;
  let description: string = 'validation error';
  if (keys && keys[0]) {
    const fieldname = keys[0] as keyof FieldErrors<TFieldValues>;
    const field = error[fieldname];
    if (field && typeof field.message === 'string') {
      description = field.message;
    }
  }
  return { title, description };
}

export default catchInvalidForm;
