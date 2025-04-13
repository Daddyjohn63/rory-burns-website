'use client';

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' }
];

export const SocialMedia = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};
