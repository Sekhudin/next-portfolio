import {
  HTTPErrorCode,
  HTTPErrorStatus,
  type HTTPError,
  type CatchError,
  type ErrorMessage,
} from 'src/types/error';

export class HTTPException implements HTTPError {
  readonly code!: HTTPErrorCode;
  readonly title!: HTTPErrorStatus;
  readonly description!: string;

  constructor(v: HTTPError) {
    Object.assign(this, v);
  }
}

export class BadRequestException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.BadRequest,
      title: HTTPErrorStatus.BadRequest,
      description: message || HTTPErrorStatus.BadRequest,
    });
  }
}

export class NotFoundException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.NotFound,
      title: HTTPErrorStatus.NotFound,
      description: message || HTTPErrorStatus.NotFound,
    });
  }
}

export class ForbiddenException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.Forbidden,
      title: HTTPErrorStatus.Forbidden,
      description: message || HTTPErrorStatus.Forbidden,
    });
  }
}

export class UnauthorizedException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.Unauthorized,
      title: HTTPErrorStatus.Unauthorized,
      description: message || HTTPErrorStatus.Unauthorized,
    });
  }
}

export class InternalServerErrorException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.InternalServerError,
      title: HTTPErrorStatus.InternalServerError,
      description: message || HTTPErrorStatus.InternalServerError,
    });
  }
}

export const catchString: CatchError<string> = (e) => {
  const errorText = e.length > 30 ? 'something was wrong' : e;
  const { code, title, description } = new InternalServerErrorException(errorText);
  const message: ErrorMessage = { title, description };
  const error: HTTPError = { code, title, description };
  const errorObject: Error = new Error(description);
  return { error, message, errorObject };
};

export const defaultError = catchString(HTTPErrorStatus.InternalServerError);
