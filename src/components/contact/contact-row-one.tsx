import Link from 'next/link';

export const ContactRowOne = () => {
  return (
    <section className="container mx-auto">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className=" font-bold mb-4 ">
            The Rory Burns Testimonial Committee
          </h2>

          {/* <div className="">
            <p className="mx-auto mt-6 text-2xl text-pretty ">Lucy Donovan </p>
            <div className="flex items-center justify-center gap-2">
              <Link
                href="mailto:me@lucydonovan.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-6 h-6 text-[#866908]" />
                <span className="text-xl">me@lucydonovan.com</span>
              </Link>
            </div>
          </div> */}
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-xl">
              Lucy Donovan{' '}
              <Link href="mailto:me@lucydonovan.com" target="blank">
                <span className="text-blue-500 underline text-xl">
                  me@lucydonovan.com
                </span>
              </Link>{' '}
              for any information on tickets/merchandise
            </p>
            <p className="text-xl">David Plowman - Chairman</p>
            <p className="text-xl">Crispin Lyden-Cowen - Treasurer</p>
            <p className="text-xl">Simon Dyson - Committee Member</p>
            <p className="text-xl">Arun Harinath - Committee Member</p>
            <p className="text-xl">Tom Jewell - Committee Member</p>
            <p className="text-xl">Ian Geddes - Committee Member</p>
            <p className="text-xl">Bob Qureshi - Committee Member</p>
            <p className="text-xl">Thomas Lancefield - Committee Member</p>
            <p className="text-xl">Paul Farrow - Committee Member</p>
            <p className="text-xl">Peter Fawley - Committee Member</p>
            <p className="text-xl">Jak Martin - Committee Member</p>
            <p className="text-xl">Fergus O&apos;Connell - Committee Member</p>
          </div>
        </div>
      </div>
    </section>
  );
};
