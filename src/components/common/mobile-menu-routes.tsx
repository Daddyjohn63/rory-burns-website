'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { menuItems } from '@/utils/links';

export const MobileMenuRoutes = () => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'text-yellow-500'
      : 'text-white';
  };

  return (
    <nav className="flex flex-col space-y-4">
      {menuItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            ' font-medium transition-colors hover:text-yellow-500',
            isActive(item.href)
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
