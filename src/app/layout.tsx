import type { Metadata } from 'next';
import { Source_Sans_3 as FontSans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { BackToTop } from '@/components/common/back-to-top';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Rory Burns Testimonial Year',
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
  useScrollToTop();

  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
