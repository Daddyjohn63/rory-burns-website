import Image from 'next/image';

export const AboutRowOne = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h2 className=" font-bold mb-4 text-[#866908]">
              Rory Burns - The Man
            </h2>

            <p className=" text-gray-700">
              Rory Burns is a name synonymous with resilience, leadership, and
              skill on the cricket field. Born and raised in Surrey, Rory began
              his cricketing journey with Surrey County Cricket Club, quickly
              making a name for himself as a dependable opening batsman.
              <br></br>
              <br></br> His impressive performances earned him a call-up to the
              England Test team, where he became a cornerstone of the batting
              lineup. Rory has amassed numerous career milestones, leading
              Surrey to a hat-trick of titles from 2022-2024, scoring more than
              hat-trick of titles from 2022-2024, scoring more than 1,000 runs
              in 2024 as he became the second most successful captain in the
              Club’s 180-year history outright with 4 championship titles. Only
              Stuart Surridge, with five, has won more County Championship
              titles for Surrey.<br></br>
              <br></br> Known for his distinctive technique and unwavering
              focus, Rory has become a fan favourite and an inspiration to
              aspiring cricketers worldwide. Off the field, Rory is a dedicated
              family man and a passionate advocate for causes that uplift that
              uplift communities. His Testimonial Year is not just a celebration
              of his sporting achievements but also a testament to his character
              and contributions beyond the game.
            </p>
          </div>
          <div></div>
          <div className="lg:w-1/2">
            <Image
              src="/about/champions.jpg"
              alt="county champions"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={675}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
