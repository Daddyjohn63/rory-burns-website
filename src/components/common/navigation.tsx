'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const headerNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Charities', href: '/charities' },
  { label: 'Contact', href: '/contact' }
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
    <nav className={className}>
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
              className={`text-sm font-medium transition-colors hover:text-primary ${
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
