import type { Metadata } from 'next';
import { Source_Sans_3 as FontSans } from 'next/font/google';
import './globals.css';
import '@/custom-styles/custom-styles.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { BackToTop } from '@/components/common/back-to-top';

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: {
    default: 'Rory Burns Testimonial Year',
    template: '%s | Rory Burns Testimonial Year'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5
  },
  description:
    'Join us as we honour Rory&apos;s remarkable journey and support charities close to his heart',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
      </head>
      <body className={`${fontSans.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
