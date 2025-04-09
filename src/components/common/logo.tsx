'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-bold">Rory Burns Testimonial</span>
      {/* <Image
        src="/logos/rb-logo.png"
        alt="Rory Burns"
        width={60}
        height={33}
        className="h-14 md:h-16 w-auto"
        priority
      /> */}
    </Link>
  );
};
