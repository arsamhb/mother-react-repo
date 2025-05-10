import clsx from 'clsx';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  children,
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  const buttonClassName = clsx(
    'btn',
    {
      'btn-disabled': isDisabled,
      'btn-primary': variant === 'primary' && !isDisabled,
      'btn-secondary': variant === 'secondary' && !isDisabled,
    },
    className
  );

  return (
    <button {...rest} disabled={isDisabled} className={buttonClassName}>
      {isLoading ? <span className="loading loading-dots loading-sm" /> : children}
    </button>
  );
};

export default Button;
