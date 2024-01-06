import type { Metadata } from 'next';
import { cn } from 'src/utils';

export const metadata: Metadata = {
  title: 'Blog | Sekhudin',
  description: `Explore the world of technology and programming in my blog.
  Dive into insightful articles covering the latest trends, coding tips, and industry insights.
  Stay informed, enhance your skills, and join a community passionate about the ever-evolving tech landscape.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
