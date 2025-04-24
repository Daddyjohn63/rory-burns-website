import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export const CharitiesRowOne = () => {
  return (
    <section className="container mx-auto">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className=" font-bold mb-4 ">
            We are supporting two incredible charities
          </h2>
          <p className="mx-auto mt-6  text-pretty text-gray-600 mb-10">
            Rory Burns&apos; testimonial year is more than a celebration of his
            remarkable cricketing career—it&apos;s an opportunity to make a
            lasting impact. Throughout the year, Rory will be supporting two
            incredible charities:{' '}
            <span className="font-bold">GLF Schools&apos; Foundation</span> and
            the <span className="font-bold">Surrey Cricket Foundation</span>.
            These organisations reflect Rory&apos;s passion for education and
            community development.
          </p>
          <Button asChild variant="rory" className="font-bold">
            <a href="/charities#donate" className="scroll-mt-[120px]">
              <span className="font-bold text-xl text-white">
                Donate to our charities
              </span>
              <ArrowRight className="animate-pulse" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
