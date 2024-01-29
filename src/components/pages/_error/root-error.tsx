'use client';
import type { ErrorPageProps } from 'src/utils';
import ErrorPage from './500';

export default function GlobalError(props: ErrorPageProps) {
  return (
    <html>
      <body>
        <ErrorPage {...props} />
      </body>
    </html>
  );
}
