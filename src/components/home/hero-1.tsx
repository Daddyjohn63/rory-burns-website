import Image from 'next/image';
import Link from 'next/link';

export const Hero1 = () => {
  return (
    <section className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-8 lg:px-8 lg:py-24">
          {/* Content Section */}
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:w-1/2 lg:max-w-lg">
            <h1 className=" font-bold tracking-tight text-gray-900 ">
              Rory Burns
            </h1>
            <p className="mt-6 text-4xl leading-8 text-gray-600">
              2025 Testimonial Year
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <Image
                src="/home/hero-2.jpg"
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
