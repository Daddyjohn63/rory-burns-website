import Image from 'next/image';

export const CharitiesRowTwo = () => {
  return (
    <section className="relative shadow-section bg-section-gradient py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/charities/surrey-cricket-foundation.jpg"
              alt="Surrey Cricket Foundation"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={675}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className=" font-bold mb-4 ">Surrey Cricket Foundation</h2>

            <p className=" text-gray-600">
              The Surrey Cricket Foundation is the charitable body dedicated to
              keeping the grassroots game growing and thriving in Surrey, and an
              integral part of Surrey County Cricket Club. We work tirelessly
              with schools, clubs, charities, and governing bodies to increase
              participation in cricket across all demographics, making cricket
              inclusive for everyone. <br></br>
              <br></br> We also invest in the essential infrastructure that
              allows the game to flourish, including funding new facilities and
              training new coaches and umpires. Ultimately, we strive to make a
              difference in people&apos;s lives through the power of cricket,
              fostering community, developing skills, and promoting a lifelong
              love of the game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
