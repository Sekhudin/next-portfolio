import type { Props, WithErrorPage } from 'packages/utils/cn';
import ErrorPage from './internal-server.error';

export default function RootError(props: Props<WithErrorPage>) {
  return (
    <html>
      <body>
        <ErrorPage {...props} />
      </body>
    </html>
  );
}
