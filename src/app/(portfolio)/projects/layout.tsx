import type { Metadata } from 'next';
import { cn } from 'src/utils';

export const metadata: Metadata = {
  title: 'Projects | Sekhudin',
  description: `Discover my diverse portfolio of technology and programming projects.
  From web and mobile development to innovative coding solutions, explore hands-on examples showcasing my expertise.
  Uncover the intersection of creativity and functionality as I share my journey in crafting digital experiences and solving real-world challenges`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
