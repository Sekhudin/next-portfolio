import catchError from './core/catcher';
import errorWithCode from './core/thrower';
import catchInvalidForm from './core/catch-invalid-form';
import {
  HTTPErrorStatus,
  HTTPErrorCode,
  type ErrorCode,
  type ErrorMessage,
  type CatchError,
} from 'src/types/error';

export type { ErrorCode, ErrorMessage, CatchError };
export { errorWithCode, catchError, catchInvalidForm, HTTPErrorCode, HTTPErrorStatus };
