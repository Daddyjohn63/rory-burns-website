'use client';

import { Logo } from './logo';
import { Navigation } from './navigation';
import { SocialMedia } from './social-media';
import { MobileSideBar } from './mobile-sidebar';

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <Navigation />
          </div>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <MobileSideBar />
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
};
