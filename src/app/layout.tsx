import 'src/styles/globals.css';
import type { Metadata } from 'next';
import RootLayout from 'src/components/organisms/layout/root';
import { GMAIL } from 'src/config/contact';
import { ogMain } from 'src/components/shared/static-file';

export const metadata: Metadata = {
  metadataBase: new URL(`http://localhost:${process.env.PORT || 3000}`),
  applicationName: "Sekhudin's Portfolio",
  title: 'Sekhudin | Software Engineer',
  description: 'No errors, just pure functionalities',
  creator: 'sekhudin',
  authors: [{ name: 'Sekhudin' }],
  formatDetection: { telephone: true, email: true, address: true, date: true, url: true },
  keywords: ['Portfolio', 'Personal Blog', 'Hashnode', 'Software Engineer'],
  openGraph: {
    emails: [GMAIL.contact],
    images: [{ url: ogMain.src, width: ogMain.width, height: ogMain.height, alt: 'Syaikhu.com' }],
  },
};
export default RootLayout;
