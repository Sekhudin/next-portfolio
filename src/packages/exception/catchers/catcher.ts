import { EmailJSResponseStatus } from '@emailjs/browser/es/models/EmailJSResponseStatus';
import { ApolloError } from '@apollo/client';
import { HTTPErrorStatus } from 'configs/error.config';
import Debugger from 'packages/utils/debugger';
import type { CatchError } from 'types/error';
import Exception from './exception';
import httpCatcher from './http.catcher';
import apolloCatcher from './apollo.catcher';
import emailJsCatcher from './emailjs.catcher';
import errorCatcher from './error.catcher';
import stringCatcher from './string.catcher';

const catcher: CatchError = (e) => {
  const status = HTTPErrorStatus.InternalServerError;
  const defaultError = stringCatcher(status);
  // debug Error
  Debugger.showError(e);
  if (e instanceof Exception) {
    return httpCatcher(e);
  }

  if (e instanceof ApolloError) {
    return apolloCatcher(e);
  }

  if (e instanceof Error) {
    return errorCatcher(e, defaultError);
  }

  if (e instanceof EmailJSResponseStatus) {
    return emailJsCatcher(e);
  }

  if (typeof e === 'string') {
    return stringCatcher(e);
  }

  return defaultError;
};

export default catcher;
