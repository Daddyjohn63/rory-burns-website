'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
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
          className="text-foreground/60 hover:text-primary transition-colors"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};
