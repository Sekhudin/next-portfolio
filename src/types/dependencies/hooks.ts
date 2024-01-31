import useForm, { formResolver } from 'src/hooks/use-form';
import useQuery from 'src/hooks/use-query';
import useSuspenseQuery from 'src/hooks/use-suspense-query';

export type _useFormDI = typeof useForm;
export type _formResolverDI = typeof formResolver;
export type _useQueryDI = typeof useQuery;
export type _useSuspenseQueryDI = typeof useSuspenseQuery;
export type { UseAsyncTask as _useAsyncTaskDI } from 'src/hooks/core/use-async-task';
