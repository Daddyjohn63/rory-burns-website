import Hero2 from '@/components/home/hero-2';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';
import { Sponsors } from '@/components/home/sponsors';

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
