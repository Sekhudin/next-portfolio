export enum HTTPErrorCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export enum HTTPErrorStatus {
  BadRequest = 'Bad Request',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'Not Found',
  InternalServerError = 'Internal Server Error',
}

export enum GQLErrorStatus {
  BadRequest = 'BAD REQUEST',
  Unauthorized = 'UNAUTHENTICATED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT FOUND',
  InternalServerError = 'INTERNAL SERVER ERROR',
}

export interface HTTPError {
  code: HTTPErrorCode;
  title: HTTPErrorStatus;
  description: string;
}

type HTTPErrorCodeString = '400' | '401' | '403' | '404' | '500';
type GQLErrorStatusString = 'UNAUTHENTICATED' | 'INTERNAL SERVER ERROR';
export type ErrorCode =
  | HTTPErrorCode
  | HTTPErrorCodeString
  | GQLErrorStatus
  | GQLErrorStatusString
  | number;
export type ErrorMessage = Pick<HTTPError, 'title' | 'description'>;
export type CatchError<T = unknown> = (error: T) => {
  error: HTTPError;
  message: ErrorMessage;
  errorObject: Error;
};
