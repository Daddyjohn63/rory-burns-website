'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Component mounted');

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      console.log('Scroll event fired, position:', scrollY);

      if (scrollY > 300) {
        console.log('Setting visible to true');
        setIsVisible(true);
      } else {
        console.log('Setting visible to false');
        setIsVisible(false);
      }
    };

    // Initial check
    console.log(
      'Initial scroll position:',
      window.pageYOffset || document.documentElement.scrollTop
    );
    handleScroll();

    // Add scroll listener
    console.log('Adding scroll listener');
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      console.log('Removing scroll listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  console.log('Rendering, isVisible:', isVisible);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors z-[100]"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};
