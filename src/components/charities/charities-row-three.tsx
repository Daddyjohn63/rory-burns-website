import Image from 'next/image';

export const CharitiesRowThree = () => {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container flex flex-col gap-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/charities/glf-schools-foundation.svg"
              alt="Surrey Cricket Foundation"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={675}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className=" font-bold mb-4 ">GLF Schools&apos; Foundation</h2>

            <p className=" text-gray-600">
              GLF Schools is a dynamic multi-academy trust of 43 schools,
              committed to providing high-quality education for over 17,000
              children and young people aged 2 to 19. With around 2,500 staff,
              our schools serve communities across Oxfordshire, Berkshire,
              Hampshire, Surrey, West Sussex, and the London Boroughs of
              Wandsworth and Croydon.<br></br>
              <br></br> As one of Rory Burns&apos; chosen charities for his
              testimonial year and beyond, the GLF Schools&apos; Foundation is
              dedicated to breaking down socio-economic barriers that prevent
              young people from accessing life-enriching opportunities.
              Established in 2022, the Foundation ensures that all students,
              regardless of financial background can explore, experience, and
              enjoy activities that support their personal development.
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-600">
            With nearly 4,000 students (almost 20% of our cohort) classified as
            financially disadvantaged, we are committed to giving them the
            support they need to thrive. Rory, a proud ambassador for the GLF
            Schools&apos; Foundation, is raising funds for The Opportunity Fund.
            This initiative provides direct financial support to students and
            their families, enabling them to pursue their passions and build on
            transformative experiences. His dedication will help open doors for
            countless young people, ensuring that every child has the chance to
            succeed. <br></br>
            <br></br> By supporting Rory&apos;s testimonial year, you&apos;ll
            help the foundation continue its vital work in ensuring that all
            children, regardless of background, have access to high-quality
            learning experiences that shape their futures.
          </p>
        </div>
      </div>
    </section>
  );
};
