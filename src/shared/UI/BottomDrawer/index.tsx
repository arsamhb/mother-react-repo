'use client';
import React from 'react';
import Image from 'next/image';
import downArrowSVGAddress from '@public/img/svg/sharedDownArrowSvg.svg';
import { Drawer, DrawerContent, DrawerClose } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

export interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()} direction="bottom">
      <DrawerContent
        className={cn('rounded-t-xl bg-white px-md pt-0 pb-lg', 'backdrop-blur-[6px]', className)}
      >
        {/* Close handle */}
        <div className="flex justify-center mb-md">
          <DrawerClose asChild>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-full flex justify-center py-2"
            >
              <Image
                src={downArrowSVGAddress}
                width={16}
                height={5}
                alt="down-arrow-svg"
                className="mx-auto"
              />
            </button>
          </DrawerClose>
        </div>

        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default BottomDrawer;
