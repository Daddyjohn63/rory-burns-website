import Hero2 from '@/components/home/hero-2';
import { About } from '@/components/home/about';
import { CTA } from '@/components/home/cta';
export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <Hero2 />
        <About />
        <CTA />
      </div>
    </div>
  );
}
