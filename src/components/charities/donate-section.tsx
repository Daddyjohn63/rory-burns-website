import { Donate } from './donate';

export const DonateSection = () => {
  return (
    <section className="container mx-auto">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 lg:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className=" font-bold mb-4 ">
            Please donate to our two incredible charities
          </h2>
        </div>
        <div id="donate" className="scroll-mt-[120px]">
          <Donate />
        </div>
      </div>
    </section>
  );
};
