import type { Metadata } from 'next';
import { cn } from 'src/utils';

export const metadata: Metadata = {
  title: 'Inquiry | Sekhudin',
  description: `Ready to collaborate or have questions? Contact me through the inquiry page.
  Let's discuss your project, explore opportunities, and find solutions together. Your inquiries are important, and I look forward to connecting with you.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
