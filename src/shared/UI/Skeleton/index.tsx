import React from 'react';
import { SkeletonWrapperProps } from './skeleton.interface';
import Skeleton from './Skeleton';

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  isLoading,
  children,
  widthRem,
  heightRem,
  shape,
}) => {
  if (isLoading) {
    return <Skeleton widthRem={widthRem} heightRem={heightRem} shape={shape} />;
  }

  return <>{children}</>;
};

export default SkeletonWrapper;
