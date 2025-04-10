import Hero2 from '@/components/home/hero-2';
import { Introduction } from '@/components/home/introduction';

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <Hero2 />
        <Introduction />
      </div>
    </div>
  );
}
