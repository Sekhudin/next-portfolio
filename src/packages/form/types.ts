import type {
  UseFormProps,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
  DefaultValues as Default,
} from 'react-hook-form';

export type * from 'react-hook-form';
export type OnValid<TFieldValues extends FieldValues = FieldValues> = SubmitHandler<TFieldValues>;
export type OnInvalid<TFieldValues extends FieldValues = FieldValues> =
  SubmitErrorHandler<TFieldValues>;

export type DefaultValues<TFieldValues extends FieldValues = FieldValues> = Default<TFieldValues>;

export type UseReactFormFunc<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> = (
  e: UseFormProps<TFieldValues, TContext> & {
    service: (params: TFieldValues) => Promise<unknown>;
    okMsg?: string;
    failMsg?: string;
    callback?: (data: unknown) => void;
    errorCallback?: (e: any) => void;
  }
) => {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  onValid: OnValid;
  onInvalid: OnInvalid;
  AbsoluteLoader: () => JSX.Element;
  FixedLoader: () => JSX.Element;
  loading: boolean;
};
