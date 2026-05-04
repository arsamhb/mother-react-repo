'use client';
import React from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ModalWrapperProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  isOpen?: boolean;
  onClose?: () => void;
  withCloseButton?: boolean;
}

const sizeMap = {
  sm: 'max-w-[480px]',
  md: 'max-w-[640px]',
  lg: 'max-w-[900px]',
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  size = 'md',
  isOpen,
  onClose,
  withCloseButton = true,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <DialogContent
        className={cn(
          'relative pt-lg pr-md pb-md p-md shadow-lg rounded-lg bg-base-300',
          sizeMap[size]
        )}
      >
        {withCloseButton && (
          <DialogClose
            aria-label="Close modal"
            className="absolute top-2 right-4 hover:opacity-70 transition-opacity"
          >
            <X className="size-4" />
          </DialogClose>
        )}
        <div className="flex flex-col items-center pt-2 gap-md">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
