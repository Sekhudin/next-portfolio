import { EmailJSResponseStatus as EmailJSResponse } from '@emailjs/browser/es/models/EmailJSResponseStatus';
import type { CatchError } from 'src/types/error';
import errorWithCode from './thrower';

const catchEmailJSError: CatchError<EmailJSResponse> = ({ status, text }) => {
  const { code, ...message } = errorWithCode(status, text);
  const errorObject = new Error(text);
  return { error: { code, ...message }, message, errorObject };
};

export { EmailJSResponse };
export default catchEmailJSError;
