import React from 'react';
import Button from '@/shared/UI/Button';

interface ModalWrapperProps {
  modalId: string;
  children: React.ReactNode;
  buttonTitle: string;
  buttonVariant: 'primary' | 'secondary';
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  modalId,
  children,
  buttonVariant = 'primary',
  buttonTitle,
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

  return (
    <>
      <Button variant={buttonVariant} onClick={openModal}>
        {buttonTitle}
      </Button>
      <dialog id={modalId} className="custom-modal">
        <button onClick={closeModal} className="custom-modal-close-btn">
          ✕
        </button>
        <div className="custom-modal-box">{children}</div>
      </dialog>
    </>
  );
};

export default ModalWrapper;
