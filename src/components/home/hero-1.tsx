import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero1 = () => {
  return (
    <section className="relative  pt-16 pb-20 overflow-hidden bg-gradient-to-br from-white via-cyan-200/60 to-cyan-300/50">
      <div className="relative isolate">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}
            className="relative left-1/4 top-2 w-[66rem] h-[66rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-cyan-400 via-cyan-300 to-cyan-200 opacity-40"
          />
        </div> */}

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-x-8 lg:px-8 lg:py-24">
          {/* Content Section */}
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:w-1/2 lg:max-w-lg">
            <h1 className=" font-bold  text-gray-900 ">Rory Burns</h1>
            <p className="mt-2 text-4xl leading-8 ">2025 Testimonial Year</p>
            <p className="mt-6 text-xl ">
              A year of events to celebrate the achievements and dedication of
              the Surrey captain.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                variant={'link'}
                className="text-white relative mt-6 sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-2 bg-gradient-to-br from-blue-900/90 via-blue-600/90 to-blue-300/90"
              >
                <Link href="/#pricing" className="flex gap-2 items-center ">
                  <span className="font-bold text-xl text-white">Events</span>
                  <ArrowRight className="animate-pulse" />
                </Link>
              </Button>
              <Button
                variant={'link'}
                className="text-white relative mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-2 bg-gradient-to-br from-indigo-900/90 via-blue-600/90 to-blue-300/90"
              >
                <Link href="/#pricing" className="flex gap-2 items-center ">
                  <span className="font-bold text-xl text-white">
                    Charities
                  </span>
                  <ArrowRight className="animate-pulse" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative">
              <Image
                src="/home/hero-1.jpg"
                alt="Rory Burns"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-xl ring-1 ring-gray-400/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
