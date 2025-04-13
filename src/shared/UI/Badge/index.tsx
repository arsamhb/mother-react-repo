import clsx from 'clsx';
import React from 'react';

export interface BadgeProps {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, type }) => {
  const badgeClassName = clsx(
    'badge rounded-[10px] text-nowrap text-xs border-none outline-none py-sm px-md',
    {
      'bg-primary text-primary-content': type === 'primary',
      'bg-secondary text-secondary-content': type === 'secondary',
    }
  );

  return <div className={badgeClassName}>{children}</div>;
};

export default Badge;
