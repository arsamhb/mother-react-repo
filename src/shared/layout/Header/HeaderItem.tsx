'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
export interface IHeadItem {
  title: string;
  topbarIcon: StaticImageData | string;
}
interface HeaderItemProps {
  item: IHeadItem;
}
const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
  const toggleSidebar = () => {
    window.dispatchEvent(new CustomEvent('toggleSidebar'));
  };

  return (
    <div className="z-10 p-3" onClick={() => item.title === 'منو' && toggleSidebar()}>
      {/* most aria-label for button */}
      <button type="button">
        <Image src={item.topbarIcon} alt={item.title} className="text-emerald-500" />
      </button>
    </div>
  );
};

export default HeaderItem;
