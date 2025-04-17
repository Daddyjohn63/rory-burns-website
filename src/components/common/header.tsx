'use client';

import { Logo } from './logo';
import { Navigation } from './navigation';
import { SocialMedia } from './social-media';
import { MobileSideBar } from './mobile-sidebar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Initial check
    handleScroll();

    // Add both window scroll listeners
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <header
    //   className={`fixed top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300 ${
    //     isScrolled ? '!bg-black/60' : '!bg-black/10'
    //   }`}
    // >
    <header
      className={`bg-black z-50 w-full backdrop-blur-sm transition-colors duration-300 md:fixed md:top-0 ${
        isScrolled ? 'md:bg-black/90' : 'md:bg-black/10'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center">
          <div className="w-1/4">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>
          <div className="w-1/4 flex justify-end items-center space-x-4">
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
