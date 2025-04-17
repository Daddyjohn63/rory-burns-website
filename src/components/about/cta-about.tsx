import { FaCalendarCheck } from 'react-icons/fa';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Mail } from 'lucide-react';

export const data = [
  {
    description:
      'Join us at exclusive testimonial events throughout the year, with proceeds supporting both charities.'
  },
  {
    description:
      'Every contribution, big or small, makes a difference. Secure donation links will be provided.'
  },
  {
    description:
      'Take part in exciting auctions featuring signed memorabilia, experiences, and unique items from Rory and the cricketing world.'
  },
  {
    description:
      "Share Rory's testimonial year and these fantastic causes on social media to help raise awareness."
  }
];

export const CTAAbout = () => {
  return (
    <section className="relative  py-12 md:py-32">
      <div className="container flex flex-col gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold md:mb-12 md:text-center pl-6 text-[#9C8561]">
          How You Can Contribute
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* column 1 */}
          <div className="w-full md:w-1/3 p-6 md:mt-4 rounded-lg shadow-sm">
            {/* <h3 className="text-2xl font-semibold mb-4 text-[#866908]">
              Fans and supporters can get involved in several ways
            </h3> */}
            <ul>
              {data.map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="text-gray-600 flex items-start gap-2">
                    <ChevronRight className="w-6 h-6 flex-shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* column 2 */}
          <Link href="/events" className="block w-full md:w-1/3">
            <div className="relative h-full flex flex-col p-6 bg-gradient-to-br from-[#000000] via-[#000000]/90 to-[#000000]/80 rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#9C8561] flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 p-3">
                  <FaCalendarCheck className="w-6 h-6 md:w-7 md:h-7" />
                </span>
                <h3 className="text-2xl font-bold">Six exciting events</h3>
              </div>

              <p className="flex-grow text-white">
                From a County Championship match, gala dinners, a T20 and Test
                match, a golf day, rounded by a Grand Finale Dinner in the Ashes
                Suite at the Oval.
              </p>
              <span className="mt-4 flex items-center gap-2 text-white hover:text-[#866908]">
                Find out more
                <ArrowRight className="animate-pulse text-[#9C8561]" />
              </span>
            </div>
          </Link>
          {/* column 3 */}
          <Link href="/charities" className="block w-full md:w-1/3">
            <div className=" relative h-full flex flex-col p-6 bg-gradient-to-br from-[#000000] via-[#000000]/90 to-[#000000]/80 rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#9C8561] flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 p-3">
                  <FaCalendarCheck className="w-6 h-6 md:w-7 md:h-7" />
                </span>
                <h3 className="text-2xl font-semibold">
                  Supporting two charities
                </h3>
              </div>

              <p className="flex-grow text-white">
                Rory will be supporting two incredible charities: GLF
                Schools&apos; Foundation and the Surrey Cricket Foundation.{' '}
                <br></br>
                <br></br>These organisations reflect Rory&apos;s passion for
                education, community development, and the well-being of current
                and former cricketers.
              </p>
              <span className="mt-4 flex items-center gap-2 text-white hover:text-[#9C8561]">
                Find out more
                <ArrowRight className="animate-pulse text-[#9C8561]" />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="container flex pt-6 flex-col gap-4 items-center justify-center mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center max-w-xl text-gray-700 text-lg font-semibold">
          If you would like to email any questions, wish to get involved or
          receive regular updates, please email Lucy.
        </p>
        <div className="flex items-center text-gray-700 gap-2 font-semibold hover:text-[#866908]">
          <Mail className="text-[#866908]" />
          <Link href="mailto:lucy@roryburns.com">me@lucydonovan.com</Link>
        </div>
      </div>
    </section>
  );
};
