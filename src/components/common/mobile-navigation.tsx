'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mobileNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Charities', href: '/charities' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' }
];

export const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden">
      <ul className="flex flex-col space-y-4">
        {mobileNavItems.map(item => (
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
