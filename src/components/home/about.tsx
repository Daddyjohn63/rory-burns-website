import Image from 'next/image';
import { MotionDiv, MotionH2, MotionSection } from '../common/motion-wrapper';
import { containerVariants, listVariants } from '@/utils/constants';

export const About = () => {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white py-12 md:py-32 md:pt-48"
    >
      <MotionDiv
        variants={containerVariants}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <MotionH2
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" font-bold mb-4 text-[#866908]"
            >
              Rory Burns Testimonial Year
            </MotionH2>
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
          <MotionDiv variants={listVariants} className="lg:w-1/2">
            <Image
              src="/home/about-rory.jpg"
              alt="About me"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1000}
              height={1000}
            />
          </MotionDiv>
        </div>
      </MotionDiv>
    </MotionSection>
  );
};
