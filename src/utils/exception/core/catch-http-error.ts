import type { CatchError } from 'src/types/error';
import { HTTPException } from './thrower';

const catchHTTPError: CatchError<HTTPException> = (e) => {
  const { code, ...msg } = e;
  const message = msg;
  const error = e;
  const errorObject = new Error(e.description);
  return { error, message, errorObject };
};

export { HTTPException };
export default catchHTTPError;
