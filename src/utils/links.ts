import { Home, User, Settings, Briefcase, BookOpen, Mail } from 'lucide-react';

export const menuItems = [
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
  },
  {
    id: 6,
    label: 'Privacy Policy',
    href: '/privacy-policy',
    icon: Settings,
    mainHeader: false
  },
  {
    id: 7,
    label: 'Terms of Service',
    href: '/terms-of-service',
    icon: Settings,
    mainHeader: false
  }
];
