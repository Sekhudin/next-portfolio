import { HTTPErrorStatus, type CatchError } from 'src/types/error';
import catchErrorInstance from './catch-error-instance';
import cathStringInstance from './catch-error-string';
import catchApolloError, { ApolloError } from './catch-apollo-error';
import catchEmailJSError, { EmailJSResponse } from './catch-emailjs-error';
import catchHTTPError, { HTTPException } from './catch-http-error';
import Debug from './debugger';

const catchError: CatchError = (e) => {
  const status = HTTPErrorStatus.InternalServerError;
  const defaultError = cathStringInstance(status);
  // debug Error
  Debug.error(e);

  if (e instanceof HTTPException) {
    return catchHTTPError(e);
  }

  if (e instanceof ApolloError) {
    return catchApolloError(e);
  }

  if (e instanceof Error) {
    return catchErrorInstance(e, defaultError);
  }

  if (e instanceof EmailJSResponse) {
    return catchEmailJSError(e);
  }

  if (typeof e === 'string') {
    return cathStringInstance(e);
  }

  return defaultError;
};

export default catchError;
