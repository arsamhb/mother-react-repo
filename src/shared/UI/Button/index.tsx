import clsx from 'clsx';
import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
}) => {
  const ButtonClassName = clsx('btn', {
    'btn-disabled': loading || disabled,
    'btn-primary': variant === 'primary' && !loading && !disabled,
    'btn-secondary': variant === 'secondary' && !loading && !disabled,
  });

  return (
    <button disabled={disabled || loading} onClick={onClick} className={ButtonClassName}>
      {loading ? <span className="loading loading-dots loading-sm"></span> : children}
    </button>
  );
};

export default Button;
