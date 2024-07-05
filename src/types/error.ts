import type { FieldValues, FieldErrors } from 'react-hook-form';
import type { HTTPErrorCode, HTTPErrorStatus, GQLErrorCode } from 'configs/error.config';

export interface HTTPError {
  code: HTTPErrorCode;
  title: HTTPErrorStatus;
  description: string;
}

type HTTPErrorCodeString = '400' | '401' | '403' | '404' | '500';
export type ErrorCode = HTTPErrorCode | HTTPErrorCodeString | GQLErrorCode | number;
export type ErrorMessage = Pick<HTTPError, 'title' | 'description'>;
export type CatchError<T = unknown> = (error: T) => {
  error: HTTPError;
  message: ErrorMessage;
  errorObject: Error;
};

export type InvalidFormCatcher<TFieldValues extends FieldValues = FieldValues> = (
  error: FieldErrors<TFieldValues>
) => ErrorMessage;
