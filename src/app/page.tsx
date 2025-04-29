import Hero2 from '@/components/home/hero-2';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';
import { Sponsors } from '@/components/home/sponsors';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rory Burns Testimonial Year',
  description:
    'Join us in honouring Rory&apos;s journey, from his early days in the sport to becoming one of England&apos;s most dependable cricketers.'
};

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <Hero2 />
        <About />
        <CTA />
        <Sponsors />
      </div>
    </div>
  );
}
