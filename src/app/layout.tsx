import 'src/styles/globals.css';
import type { Metadata } from 'next';
import Layout from 'src/components/organisms/layout/root';

export const metadata: Metadata = {
  title: 'Sekhudin | Software Engineer',
  description: 'No errors, just pure functionalities',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Layout>{children}</Layout>
    </html>
  );
}
