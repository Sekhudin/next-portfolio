import {
  HTTPErrorCode,
  GQLErrorStatus,
  HTTPErrorStatus,
  type HTTPError,
  type ErrorCode,
} from 'src/types/error';

class HTTPException implements HTTPError {
  readonly code!: HTTPErrorCode;
  readonly title!: HTTPErrorStatus;
  readonly description!: string;

  constructor(v: HTTPError) {
    Object.assign(this, v);
  }
}

class BadRequestException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.BadRequest,
      title: HTTPErrorStatus.BadRequest,
      description: message || HTTPErrorStatus.BadRequest,
    });
  }
}

class UnauthorizedException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.Unauthorized,
      title: HTTPErrorStatus.Unauthorized,
      description: message || HTTPErrorStatus.Unauthorized,
    });
  }
}

class ForbiddenException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.Forbidden,
      title: HTTPErrorStatus.Forbidden,
      description: message || HTTPErrorStatus.Forbidden,
    });
  }
}

class NotFoundException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.NotFound,
      title: HTTPErrorStatus.NotFound,
      description: message || HTTPErrorStatus.NotFound,
    });
  }
}

class InternalServerErrorException extends HTTPException {
  constructor(message?: string) {
    super({
      code: HTTPErrorCode.InternalServerError,
      title: HTTPErrorStatus.InternalServerError,
      description: message || HTTPErrorStatus.InternalServerError,
    });
  }
}

const errorWithCode = (code: ErrorCode, message?: string): HTTPException => {
  if (code === GQLErrorStatus.BadRequest || code === '400' || code === 400) {
    return new BadRequestException(message);
  }

  if (code === GQLErrorStatus.Unauthorized || code === '401' || code === 401) {
    return new UnauthorizedException(message);
  }

  if (code === GQLErrorStatus.Forbidden || code === '403' || code === 403) {
    return new ForbiddenException(message);
  }

  if (code === GQLErrorStatus.NotFound || code === '404' || code === 404) {
    return new NotFoundException(message);
  }

  return new InternalServerErrorException(message);
};

export { HTTPException };
export default errorWithCode;
