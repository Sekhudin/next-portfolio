import { type CatchError } from 'src/types/error';

const catchInstanceError = (
  e: Error,
  defError: ReturnType<CatchError>
): ReturnType<CatchError<Error>> => {
  const catcher: CatchError<Error> = (errorObject) => {
    const { message, error } = defError;
    return { message, error, errorObject };
  };
  return catcher(e);
};

export default catchInstanceError;
