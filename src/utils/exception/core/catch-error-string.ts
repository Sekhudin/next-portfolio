import type { HTTPError, CatchError, ErrorMessage } from 'src/types/error';
import errorWithCode from './thrower';

const catchErrorString: CatchError<string> = (e) => {
  const errorText = e.length > 30 ? 'something was wrong' : e;
  const { code, title, description } = errorWithCode('500', errorText);
  const message: ErrorMessage = { title, description };
  const error: HTTPError = { code, title, description };
  const errorObject: Error = new Error(description);
  return { error, message, errorObject };
};

export default catchErrorString;
