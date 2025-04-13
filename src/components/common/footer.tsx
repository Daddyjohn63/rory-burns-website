'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { SocialMedia } from './social-media';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation Section */}
          <div className="flex items-center">
            <Navigation className="hidden md:block" />
          </div>

          {/* Social Media Section */}
          <div className="flex items-center">
            <SocialMedia />
          </div>
        </div>

        {/* Copyright and Mobile Navigation */}
        <div className="border-t py-4">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <p className="text-sm text-white">
              © {currentYear} Rory Burns. All rights reserved.
            </p>
            <p className="text-sm text-white">
              Website by{' '}
              <Link
                target="_blank"
                href="https://webandprosper.co.uk"
                className="hover:text-[#9C8561]"
              >
                Web and Prosper
              </Link>
            </p>
            <Navigation className="md:hidden" />
          </div>
        </div>
      </div>
    </footer>
  );
};
