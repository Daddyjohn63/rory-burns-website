import { FaCalendarCheck } from 'react-icons/fa';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50/60 via-white to-teal-50/60 py-12 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className=" font-bold md:mb-12 md:text-center pl-6 text-[#866908]">
          We have an exciting year planned!
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* column 1 */}
          <div className="w-full md:w-1/3 p-6 md:mt-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-[#866908]">
              Check out our events and good causes
            </h3>
            <p>
              Rory Burns&apos; testimonial year is more than a celebration of
              his remarkable cricketing career. It&apos;s an opportunity to make
              a lasting impact.<br></br> <br></br> Throughout the year, Rory
              will be supporting two incredible charities,{' '}
              <span className="font-bold">GLF Schools&apos; Foundation</span>{' '}
              and the{' '}
              <span className="font-bold">
                Professional Cricketers&apos; Association (PCA) Trust
              </span>
            </p>
          </div>
          {/* column 2 */}
          <Link href="/events" className="block w-full md:w-1/3">
            <div className="h-full flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#866908] w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-2xl">
                  <FaCalendarCheck />
                </span>
                <h3 className="text-xl font-semibold text-[#866908]">
                  Six exciting events
                </h3>
              </div>

              <p className="flex-grow">
                From a County Championship match, gala dinners, a T20 and Test
                match, a Golf day, rounded by a Grand Finale Dinner in the Ashes
                Suite at the Oval.
              </p>
              <span className="mt-4 flex items-center gap-2 hover:text-[#866908]">
                Find out more
                <ArrowRight className="animate-pulse text-[#866908]" />
              </span>
            </div>
          </Link>
          {/* column 3 */}
          <Link href="/events" className="block w-full md:w-1/3">
            <div className="h-full flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#866908] w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-2xl">
                  <FaCalendarCheck />
                </span>
                <h3 className="text-xl font-semibold text-[#866908]">
                  Supporting two charities
                </h3>
              </div>

              <p className="flex-grow">
                From a County Championship match, gala dinners, a T20 and Test
                match, a Golf day, rounded by a Grand Finale Dinner in the Ashes
                Suite at the Oval.
              </p>
              <span className="mt-4 flex items-center gap-2 hover:text-[#866908]">
                Find out more
                <ArrowRight className="animate-pulse text-[#866908]" />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="container flex flex-col gap-4 items-center justify-center mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-semibold">
          If you would like to email any questions or wish to get involved,
          please email Lucy.
        </p>
        <div className="flex items-center gap-2 text-lg font-semibold hover:text-[#866908]">
          <Mail />
          <Link href="mailto:lucy@roryburns.com">me@lucydonovan.com</Link>
        </div>
      </div>
    </section>
  );
};
