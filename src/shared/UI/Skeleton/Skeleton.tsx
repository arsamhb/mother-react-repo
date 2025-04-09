'use client';

import React from 'react';
import { SkeletonProps } from './skeleton.interface';

const Skeleton: React.FC<SkeletonProps> = ({ shape = 'rectangle', widthRem, heightRem = 1 }) => {
  const widthAndHeight = {
    width: `${widthRem}rem`,
    height:
      shape === 'circle' ? `${widthRem}rem` : shape === 'rectangle' ? `${heightRem}rem` : '1rem',
  };

  return (
    <div
      className={`skeleton bg-custom-purple-light ${shape === 'circle' && 'shrink-0 rounded-full'}`}
      style={widthAndHeight}
    ></div>
  );
};

export default Skeleton;
