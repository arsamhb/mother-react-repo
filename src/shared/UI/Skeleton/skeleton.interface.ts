export type SkeletonShape = 'circle' | 'rectangle' | 'line';

export interface SkeletonProps {
  shape?: SkeletonShape;
  widthRem: number;
  heightRem?: number;
}

export interface SkeletonWrapperProps extends SkeletonProps {
  isLoading: boolean;
  children: React.ReactNode;
}
