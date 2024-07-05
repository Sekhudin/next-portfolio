import type { CatchError } from 'src/types/error';
import Exception from './exception';

const HttpCatcher: CatchError<Exception> = (e) => {
  const { code, ...msg } = e;
  const message = msg;
  const error = e;
  const errorObject = new Error(e.description);
  return { error, message, errorObject };
};

export default HttpCatcher;
