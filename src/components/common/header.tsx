'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { SocialMedia } from './social-media';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Navigation />
          </div>
          <div className="flex items-center">
            <SocialMedia />
          </div>
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Navigation />
            <div className="flex items-center space-x-4">
              <SocialMedia />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
