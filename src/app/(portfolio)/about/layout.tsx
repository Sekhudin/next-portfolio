import type { Metadata } from 'next';
import { cn } from 'src/utils';

export const metadata: Metadata = {
  title: 'About | Sekhudin',
  description: `Explore my story as a web and mobile developer. Proficient in HTML, CSS, and Javascript.
  Mastery of popular frameworks and dedicated to creating exceptional online experiences.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
