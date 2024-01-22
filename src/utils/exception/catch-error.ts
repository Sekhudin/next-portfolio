import { ApolloError } from '@apollo/client';
import { GQLErrorStatus, type CatchError, type ErrorMessage } from 'src/types/error';
import Debug from 'src/utils/debugger';
import {
  defaultError,
  catchString,
  HTTPException,
  UnauthorizedException,
  InternalServerErrorException,
} from './throw-error';

const catchInstanceError: CatchError<Error> = (errorObject) => {
  const { message, error } = defaultError;
  return { message, error, errorObject };
};

const catchHTTPError: CatchError<HTTPException> = (e) => {
  const { code, ...msg } = e;
  const message = msg;
  const error = e;
  const errorObject = new Error(e.description);
  return { error, message, errorObject };
};

const catchApolloError: CatchError<ApolloError> = (e) => {
  const getMessage = (msg?: string): string => (msg ? `gql- ${msg}` : `gql- ${e.message}`);
  let error: HTTPException = new InternalServerErrorException(getMessage(e.message));
  let errorObject: Error = new Error(error.description);

  if (e.graphQLErrors[0]) {
    const { message: msg, extensions, originalError } = e.graphQLErrors[0];

    if (originalError) {
      errorObject = originalError;
    }

    if (extensions && extensions['code']) {
      const extCode = extensions.code;
      if (extCode === GQLErrorStatus.Unauthorized && extCode.length < 30) {
        const description = getMessage(msg);
        error = new UnauthorizedException(description);
      }
    }
  }

  const message: ErrorMessage = {
    title: error.title,
    description: error.description,
  };
  return { error, message, errorObject };
};

const catchAllError: CatchError = (e) => {
  // debug Error
  Debug.error(e);

  if (e instanceof HTTPException) {
    return catchHTTPError(e);
  }

  if (e instanceof ApolloError) {
    return catchApolloError(e);
  }

  if (e instanceof Error) {
    return catchInstanceError(e);
  }

  if (typeof e === 'string') {
    return catchString(e);
  }

  return defaultError;
};

export default catchAllError;
