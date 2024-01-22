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
  Unauthorized = 'UNAUTHENTICATED',
  InternalServerError = 'INTERNAL SERVER ERROR',
}

export interface HTTPError {
  code: HTTPErrorCode;
  title: HTTPErrorStatus;
  description: string;
}

export type ErrorMessage = Pick<HTTPError, 'title' | 'description'>;
export type CatchError<T = unknown> = (error: T) => {
  error: HTTPError;
  message: ErrorMessage;
  errorObject: Error;
};
