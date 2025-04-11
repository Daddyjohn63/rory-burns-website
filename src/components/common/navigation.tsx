'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { links, MenuItem } from '@/utils/links';

export const Navigation = ({
  className
}: {
  className?: string;
  isFooter?: boolean;
}) => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };

  return (
    <nav
      className={cn(
        'md:flex gap-4 items-center space-x-4 text-white',
        className
      )}
    >
      {links.map((link: MenuItem) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(isActive(link.href) && 'text-yellow-500')}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
