import Notification from 'packages/utils/notification';
import type { ErrorCode, ErrorMessage, CatchError, InvalidFormCatcher } from 'types/error';
import Exception from './catchers/exception';
import catcher from './catchers/catcher';
import catchInvalidForm from './catchers/form.catcher';

class HandleException extends Exception {
  static catch: CatchError = (e) => {
    return catcher(e);
  };

  static catchToast = (e: unknown, title?: string) => {
    const { message } = HandleException.catch(e);
    return Notification.createMessageToast({
      title: title || message.title,
      description: message.description,
    });
  };

  static catchInvalidForm: InvalidFormCatcher = (e) => {
    return catchInvalidForm(e);
  };
}

export type { ErrorCode, ErrorMessage };
export default HandleException;
