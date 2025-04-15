import Image from 'next/image';

export const Sponsors = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#866908]">
          A Special Thanks to Our Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Sponsor 1 */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg ">
            <Image
              src="/home/castore-sportswear.png"
              alt="castore-sportswear"
              width={150}
              height={64}
              className="object-contain"
              priority={true}
            />
          </div>
          {/* Sponsor 2 */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg ">
            <Image
              src="/home/aj-sports.png"
              alt="aj-sports"
              width={150}
              height={64}
              className="object-contain"
            />
          </div>
          {/* Sponsor 3 */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg ">
            <Image
              src="/home/kia.jpg"
              alt="kia"
              width={150}
              height={64}
              className="object-contain"
            />
          </div>
          {/* Sponsor 4 */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg ">
            <Image
              src="/home/levy.png"
              alt="Sponsor 4"
              width={150}
              height={64}
              className="object-contain"
            />
          </div>
          {/* Sponsor 5 */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg ">
            <Image
              src="/home/heineken.png"
              alt="Sponsor 5"
              width={150}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
