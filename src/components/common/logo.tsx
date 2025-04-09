'use client';

import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-bold">Rory Burns</span>
    </Link>
  );
};
