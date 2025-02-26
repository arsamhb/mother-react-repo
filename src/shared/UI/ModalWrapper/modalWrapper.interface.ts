export interface ModalWrapperProps {
  modalId: string;
  children: React.ReactNode;
  buttonTitle: string;
  buttonVariant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}
