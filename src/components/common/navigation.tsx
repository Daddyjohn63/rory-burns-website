'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const headerNavItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'EVENTS', href: '/events' },
  { label: 'CHARITIES', href: '/charities' },
  { label: 'CONTACT', href: '/contact' }
];

const footerNavItems = [
  ...headerNavItems,
  { label: 'Privacy Policy', href: '/privacy-policy' }
];

interface NavigationProps {
  className?: string;
  isFooter?: boolean;
}

export const Navigation = ({
  className = '',
  isFooter = false
}: NavigationProps) => {
  const pathname = usePathname();
  const items = isFooter ? footerNavItems : headerNavItems;

  return (
    <nav className={`hidden md:block ${className}`}>
      <ul
        className={`flex ${
          isFooter
            ? 'flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0'
            : 'space-x-8'
        }`}
      >
        {items.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-white font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
