import { Home, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: number;
  label: string;
  href: string;
  icon: LucideIcon;
  mainHeader: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: Home,
    mainHeader: true
  },
  {
    id: 2,
    label: 'About',
    href: '/about',
    icon: User,
    mainHeader: true
  },
  {
    id: 3,
    label: 'Events',
    href: '/events',
    icon: Briefcase,
    mainHeader: true
  },
  {
    id: 4,
    label: 'Charities',
    href: '/charities',
    icon: BookOpen,
    mainHeader: true
  },
  {
    id: 5,
    label: 'Contact',
    href: '/contact',
    icon: Mail,
    mainHeader: true
  }
];

export const links = menuItems.filter(item => item.mainHeader);
export const footerLinks = menuItems;
