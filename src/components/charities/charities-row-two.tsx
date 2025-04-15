import Image from 'next/image';

export const CharitiesRowTwo = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-100/60 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/charities/pca.svg"
              alt="county champions"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={675}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className=" font-bold mb-4 text-[#866908]">
              Professional Cricketers&apos; Association (PCA) Trust
            </h2>

            <p className=" text-gray-700">
              PLACEHOLDER ONLY AS CAN&apos;T FIND CONTENT<br></br>
              <br></br> The Cricketers&apos; Trust is a registered charity
              created to support the life-long health and wellbeing of PCA
              members and their immediate family. Today&apos;s game is faster,
              more competitive, more public and more pressurised than ever
              before. Even the happiest professional career in cricket means
              long stretches away from home and financial uncertainty driven by
              driven by short-term contracts. The average cricket career comes
              to an end at the age of just 26. average cricket career comes to
              an end at the age of just 26.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
