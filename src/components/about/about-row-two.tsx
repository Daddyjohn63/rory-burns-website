import Image from 'next/image';

export const AboutRowTwo = () => {
  return (
    <section className="relative shadow-section bg-section-gradient py-12 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-14 items-center">
          <div className="md:w-1/2">
            <h2 className="font-bold mb-4 text-[#866908]">
              The Testimonial Year
            </h2>

            <p className="text-gray-700">
              A Testimonial Year is a tradition in cricket, honouring a player’s
              long-standing contributions to their club and the sport. It
              provides an opportunity for fans, teammates, and the cricketing
              community to come together and celebrate the player’s achievements
              while raising funds for charitable causes. Rory Burns’ Testimonial
              Year is a reflection of his unwavering commitment to cricket and
              his impact on the game. Through a series of special events,
              matches, and community initiatives, we aim to honour Rory’s career
              and give back to the communities that have supported him
              throughout his journey. Stay tuned for updates on how you can be a
              part of this special year and help us make it truly unforgettable
              for Rory and the cricketing world!
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/about/rory-testimonial.jpg"
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
