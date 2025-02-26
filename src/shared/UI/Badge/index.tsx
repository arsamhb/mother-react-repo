import React from 'react';
import { BadgeProps } from './badge.interface';

const Badge: React.FC<BadgeProps> = ({ children, type }) => {
  const customStyling =
    type === 'primary' ? 'bg-primary text-primary-content' : 'bg-secondary text-secondary-content';

  return (
    <div
      className={`badge rounded-[10px] text-nowrap text-xs border-none outline-none py-sm px-md ${customStyling}`}
    >
      {children}
    </div>
  );
};

export default Badge;
