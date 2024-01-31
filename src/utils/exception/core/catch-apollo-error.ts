import { ApolloError, type ServerError } from '@apollo/client';
import { GQLErrorStatus, type CatchError, type ErrorMessage } from 'src/types/error';
import errorWithCode from './thrower';

const catchApolloError: CatchError<ApolloError> = (e) => {
  const getMessage = (msg?: string): string => (msg ? `gql- ${msg}` : `gql- ${e.message}`);
  let error = errorWithCode(500, getMessage(e.message));
  let errorObject: Error = new Error(error.description);

  if (e.networkError) {
    const { message, cause } = e.networkError;
    error = errorWithCode(500, getMessage(message));
    errorObject = new Error(message, { cause });
    if (Object.keys(e.networkError).includes('statusCode')) {
      const { statusCode } = e.networkError as Pick<ServerError, 'statusCode'>;
      error = errorWithCode(statusCode, getMessage(e.message));
    }
  }

  if (e.clientErrors[0]) {
    const { message, cause } = e.clientErrors[0];
    error = errorWithCode(500, getMessage(message));
    errorObject = new Error(message, { cause });
  }

  if (e.graphQLErrors[0]) {
    const { message, cause, extensions, originalError } = e.graphQLErrors[0];
    error = errorWithCode(500, getMessage(message));
    errorObject = new Error(message, { cause });
    if (originalError) {
      errorObject = originalError;
    }

    if (extensions && extensions?.code) {
      const extCode = extensions.code;
      if (extCode === GQLErrorStatus.Unauthorized) {
        error = errorWithCode(401, message);
      }
    }
  }

  const errorMessage: ErrorMessage = {
    title: error.title,
    description: error.description,
  };
  return { error, message: errorMessage, errorObject };
};

export { ApolloError };
export default catchApolloError;
