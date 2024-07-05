import { HTTPErrorStatus } from 'configs/error.config';
import type { InvalidFormCatcher } from 'src/types/error';

const formCatcher: InvalidFormCatcher = (error) => {
  const keys = Object.keys(error);
  const title = HTTPErrorStatus.BadRequest;
  let description: string = 'validation error';
  if (keys && keys[0]) {
    const fieldname = keys[0] as any;
    const field = error[fieldname];
    if (field && typeof field.message === 'string') {
      description = field.message;
    }
  }
  return { title, description };
};

export default formCatcher;
