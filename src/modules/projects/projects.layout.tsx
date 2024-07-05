import { GithubProvider } from 'components/providers/graphql.provider';
import type { NextLayoutProps } from 'packages/utils/cn';

export default function ProjectsLayout({ children }: NextLayoutProps) {
  return <GithubProvider>{children}</GithubProvider>;
}
