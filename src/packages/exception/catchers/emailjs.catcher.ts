import type { EmailJSResponseStatus } from '@emailjs/browser';
import type { CatchError } from 'types/error';
import Exception from './exception';

const emailJsCatcher: CatchError<EmailJSResponseStatus> = ({ status, text }) => {
  const { code, ...message } = Exception.error(status, text);
  const errorObject = new Error(text);
  return { error: { code, ...message }, message, errorObject };
};

export default emailJsCatcher;
