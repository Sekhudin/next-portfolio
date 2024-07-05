import { HashnodeProvider } from 'components/providers/graphql.provider';
import type { NextLayoutProps } from 'packages/utils/cn';

export default function BlogLayout({ children }: NextLayoutProps) {
  return <HashnodeProvider>{children}</HashnodeProvider>;
}
