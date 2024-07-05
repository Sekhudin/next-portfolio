import type { HTTPError, CatchError, ErrorMessage } from 'src/types/error';
import Exception from './exception';

const stringCatcher: CatchError<string> = (e) => {
  const errorText = e.length > 30 ? 'something was wrong' : e;
  const { code, title, description } = Exception.error('500', errorText);
  const message: ErrorMessage = { title, description };
  const error: HTTPError = { code, title, description };
  const errorObject: Error = new Error(description);
  return { error, message, errorObject };
};

export default stringCatcher;
