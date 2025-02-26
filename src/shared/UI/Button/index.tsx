import React from 'react';
import { ButtonProps } from './button.interface';

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`custom-button-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
