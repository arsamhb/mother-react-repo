import React from 'react';
import Button from '@/shared/UI/Button';
import clsx from 'clsx';

export interface ModalWrapperProps {
  modalId: string;
  children: React.ReactNode;
  buttonTitle: string;
  buttonVariant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  modalId,
  children,
  buttonVariant = 'primary',
  buttonTitle,
  size,
}) => {
  const closeModal = () => {
    const elem = document.getElementById(modalId) as HTMLDialogElement;
    if (!elem) return;
    elem.close();
  };

  const openModal = () => {
    const elem = document.getElementById(modalId) as HTMLDialogElement;
    if (!elem) return;
    elem.showModal();
  };

  const dialogClassName = clsx(
    'backdrop:bg-primary/60 relative pt-lg pr-md pb-md p-md shadow-lg rounded-lg ',
    {
      'w-[480px]': size === 'sm',
      'w-[640]': size === 'md',
      'w-[900]': size === 'lg',
    }
  );

  return (
    <>
      <Button variant={buttonVariant} onClick={openModal}>
        {buttonTitle}
      </Button>
      <dialog id={modalId} className={dialogClassName}>
        <button onClick={closeModal} className="absolute top-2 left-4">
          ✕
        </button>
        <div className="pt-2">{children}</div>
      </dialog>
    </>
  );
};

export default ModalWrapper;
