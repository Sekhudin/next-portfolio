import Metadata from 'packages/utils/metadata';
import { ogMain } from 'packages/public/images';
import { APP } from 'configs/env.config';
import { GMAIL } from 'configs/contact.config';

export const metadata = Metadata.init({
  metadataBase: new URL(APP.BASE_URL),
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
});
