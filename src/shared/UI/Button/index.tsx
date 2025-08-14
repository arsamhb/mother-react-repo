import clsx from 'clsx';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  disabled = false,
  className,
  children,
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  const buttonClassName = clsx(
    `btn shadow-none ${className}`,
    {
      'btn-disabled': isDisabled,
      'btn-primary': variant === 'primary' && !isDisabled,
      'btn-secondary': variant === 'secondary' && !isDisabled,
      'btn-neutral': variant === 'neutral' && !isDisabled,
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
