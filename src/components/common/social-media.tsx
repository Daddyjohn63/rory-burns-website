'use client';

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' }
];

interface SocialMediaProps {
  variant?: 'desktop' | 'mobile';
}

export const SocialMedia = ({ variant = 'desktop' }: SocialMediaProps) => {
  const isDesktop = variant === 'desktop';

  return (
    <div
      className={`${
        isDesktop ? 'hidden md:flex' : 'flex'
      } items-center space-x-4`}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#E1306C] transition-colors"
          aria-label={label}
        >
          <Icon className="h-8 w-8 text-[#E1306C]" />
        </Link>
      ))}
    </div>
  );
};
