'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Sheet, SheetContent } from '../ui/sheet';
import { usePathname } from 'next/navigation';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { useState, useEffect } from 'react';
import { MobileContent } from './mobile-content';

interface MobileSidebarState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const MobileSideBar = () => {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state: MobileSidebarState) => state.onOpen);
  const onClose = useMobileSidebar(
    (state: MobileSidebarState) => state.onClose
  );
  const isOpen = useMobileSidebar((state: MobileSidebarState) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block"
        variant="ghost"
        size="sm"
        aria-label="Open mobile menu"
      >
        <Menu className="!h-6 !w-6 text-white hover:text-black" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="p-0 bg-white w-full">
          <MobileContent />
        </SheetContent>
      </Sheet>
    </>
  );
};
