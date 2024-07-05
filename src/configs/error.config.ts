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

export enum GQLErrorCode {
  BadRequest = 'BAD REQUEST',
  Unauthorized = 'UNAUTHENTICATED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT FOUND',
  InternalServerError = 'INTERNAL SERVER ERROR',
}

// prettier-ignore
export const errorType = {
  badRequest: [
    HTTPErrorCode.BadRequest,
    HTTPErrorCode.BadRequest.toString(),
    GQLErrorCode.BadRequest,
  ],
  unauthorized: [
    HTTPErrorCode.Unauthorized,
    HTTPErrorCode.Unauthorized.toString(),
    GQLErrorCode.Unauthorized,
  ],
  forbidden: [
    HTTPErrorCode.Forbidden,
    HTTPErrorCode.Forbidden.toString(),
    GQLErrorCode.Forbidden,
  ],
  notFound: [
    HTTPErrorCode.NotFound,
    HTTPErrorCode.NotFound.toString(),
    GQLErrorCode.NotFound,
  ],
  internalServerError: [
    HTTPErrorCode.InternalServerError,
    HTTPErrorCode.InternalServerError.toString(),
    GQLErrorCode.InternalServerError,
  ],
};
