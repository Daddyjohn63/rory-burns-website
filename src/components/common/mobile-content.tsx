'use client';

import Link from 'next/link';
import { SocialMedia } from './social-media';
import { Logo } from './logo';
import { MobileMenuRoutes } from './mobile-menu-routes';

export const MobileContent = () => {
  return (
    <div className="h-full w-full flex flex-col bg-[#1e1e1f] shadow-sm z-50">
      <div className="p-6">
        <Link href="/" className="flex items-center justify-center">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="px-6 py-4">
          <MobileMenuRoutes />
        </div>
        <div className="mt-auto p-6 border-t border-gray-800">
          <SocialMedia variant="mobile" />
        </div>
      </div>
    </div>
  );
};
