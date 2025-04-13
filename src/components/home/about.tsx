import Image from 'next/image';

export const About = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Rory Burns Testimonial Year
            </h2>
            <p className="text-xl text-gray-600 font-bold mb-4">
              Join us in honouring Rory&apos;s journey, from his early days in
              the sport to becoming one of England&apos;s most dependable
              cricketers.
            </p>
            <p className="text-lg text-gray-700">
              Welcome to the official website for Rory Burns Testimonial Year—an
              exciting celebration of one of England&apos;s most dedicated
              cricketers. Explore exclusive events, stories, and highlights as
              we honour Rory&apos;s commitment to the game and raise funds for
              causes that transform communities.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/home/about-rory.jpg"
              alt="About me"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
