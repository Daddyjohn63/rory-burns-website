import Image from 'next/image';

export const About = () => {
  return (
    <section className="bg-white py-12 md:py-32 md:pt-48">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h2 className=" font-bold mb-4 text-[#866908]">
              Rory Burns Testimonial Year
            </h2>
            <p className="text-xl text-gray-600 font-bold mb-4">
              Join us in honouring Rory&apos;s journey, from his early days in
              the sport to becoming one of England&apos;s most dependable
              cricketers.
            </p>
            <p className=" text-gray-700">
              Welcome to the official website for Rory Burns Testimonial Year—an
              exciting celebration of one of England&apos;s most dedicated
              cricketers. Explore exclusive events, stories, and highlights as
              we honour Rory&apos;s commitment to the game and raise funds for
              causes that transform communities.
            </p>
            <Image
              src="/home/surrey-logo.jpg"
              alt="Rory Burns Testimonial Year"
              width={500}
              height={246}
              className="w-1/3 h-auto rounded-lg mt-4"
            />
          </div>
          <div></div>
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
