`use client`;

import React from "react";

interface SkeletonProps {
  shape: "circle" | "rectangle" | "line";
  widthRem: number;
  heightRem: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ shape, heightRem, widthRem }) => {
  if (shape === "circle")
    return (
      <div
        className={`skeleton-${shape} h-${heightRem * 4} w-${widthRem * 4}`}
      ></div>
    );

  if (shape === "line")
    return <div className={`skeleton-${shape} w-${widthRem * 4}`}></div>;
  
  if (shape === "rectangle")
    return (
      <div
        className={`skeleton-${shape} h-${heightRem * 4} w-${widthRem * 4}`}
      ></div>
    );
};

export default Skeleton;
