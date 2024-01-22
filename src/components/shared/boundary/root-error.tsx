"use client"
import ErrorPage, { type ErrorPageProps } from './error-page';

export default function GlobalError(props: ErrorPageProps) {
  return (
    <html>
      <body>
        <ErrorPage {...props} />
      </body>
    </html>
  );
}
