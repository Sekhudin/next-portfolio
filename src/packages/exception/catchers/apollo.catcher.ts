import type { ApolloError, ServerError } from '@apollo/client';
import { GQLErrorCode } from 'configs/error.config';
import type { CatchError, ErrorMessage } from 'types/error';
import Exception from './exception';

const apolloCatcher: CatchError<ApolloError> = (e) => {
  const getMessage = (msg?: string): string => (msg ? `gql- ${msg}` : `gql- ${e.message}`);
  let error = Exception.error(500, getMessage(e.message));
  let errorObject: Error = new Error(error.description);

  if (e.networkError) {
    const { message, cause } = e.networkError;
    error = Exception.error(500, getMessage(message));
    errorObject = new Error(message, { cause });
    if (Object.keys(e.networkError).includes('statusCode')) {
      const { statusCode } = e.networkError as Pick<ServerError, 'statusCode'>;
      error = Exception.error(statusCode, getMessage(e.message));
    }
  }

  if (e.clientErrors[0]) {
    const { message, cause } = e.clientErrors[0];
    error = Exception.error(400, getMessage(message));
    errorObject = new Error(message, { cause });
  }

  if (e.graphQLErrors[0]) {
    const { message, cause, extensions, originalError } = e.graphQLErrors[0];
    error = Exception.error(500, getMessage(message));
    errorObject = new Error(message, { cause });
    if (originalError) {
      errorObject = originalError;
    }

    if (extensions && extensions?.code) {
      const extCode = extensions.code;
      if (extCode === GQLErrorCode.Unauthorized) {
        error = Exception.error(401, message);
      }
    }
  }

  const errorMessage: ErrorMessage = {
    title: error.title,
    description: error.description,
  };
  return { error, message: errorMessage, errorObject };
};

export default apolloCatcher;
