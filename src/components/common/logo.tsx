'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex items-center">
      {/* <span className="text-2xl font-bold">Rory Burns Testimonial</span> */}
      <Image
        src="/logos/rb-logo-xlg.png"
        alt="Rory Burns"
        width={100}
        height={100}
        className="h-14 md:h-16 w-auto"
        priority
      />
    </div>
  );
};
