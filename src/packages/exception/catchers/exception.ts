import { HTTPErrorCode, HTTPErrorStatus, errorType } from 'configs/error.config';
import type { HTTPError, ErrorCode } from 'types/error';

class Exception implements HTTPError {
  readonly code!: HTTPErrorCode;
  readonly title!: HTTPErrorStatus;
  readonly description!: string;

  constructor(v?: HTTPError) {
    Object.assign(this, v);
  }

  static badRequest(message?: string) {
    return new Exception({
      code: HTTPErrorCode.BadRequest,
      title: HTTPErrorStatus.BadRequest,
      description: message || HTTPErrorStatus.BadRequest,
    });
  }

  static unAuthorized(message?: string) {
    return new Exception({
      code: HTTPErrorCode.Unauthorized,
      title: HTTPErrorStatus.Unauthorized,
      description: message || HTTPErrorStatus.Unauthorized,
    });
  }

  static forbidden(message?: string) {
    return new Exception({
      code: HTTPErrorCode.Forbidden,
      title: HTTPErrorStatus.Forbidden,
      description: message || HTTPErrorStatus.Forbidden,
    });
  }

  static notFound(message?: string) {
    return new Exception({
      code: HTTPErrorCode.NotFound,
      title: HTTPErrorStatus.NotFound,
      description: message || HTTPErrorStatus.Forbidden,
    });
  }

  static internalServerError(message?: string) {
    return new Exception({
      code: HTTPErrorCode.InternalServerError,
      title: HTTPErrorStatus.InternalServerError,
      description: message || HTTPErrorStatus.InternalServerError,
    });
  }

  static error(code: ErrorCode, message?: string) {
    if (errorType.badRequest.includes(code)) {
      return Exception.badRequest(message);
    }

    if (errorType.unauthorized.includes(code)) {
      return Exception.unAuthorized(message);
    }

    if (errorType.forbidden.includes(code)) {
      return Exception.forbidden(message);
    }

    if (errorType.notFound.includes(code)) {
      return Exception.notFound(message);
    }

    return Exception.internalServerError(message);
  }
}

export default Exception;
