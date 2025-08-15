'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';
export interface ISideItem {
  title: string;
  linkUrl: string;
  officeIcon: string;
}
const SidebarItem: React.FC<{ item: ISideItem }> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(item.linkUrl);
  return (
    <div className="p-0 relative">
      {isActive && <div className="sideAfter"></div>}
      <li className={`h-full mx-6 p-4 font-semibold ${isActive ? '  bg-neutral rounded-sm' : ''}`}>
        <Link href={item.linkUrl} className={`w-full flex gap-x-4 m-auto`}>
          <div className="w-6 h-6">
            <Image src={item.officeIcon} alt={item.title} />
          </div>
          <span className={`${isActive ? 'text-secondary' : 'text-base-content'}`}>
            {item.title}
          </span>
        </Link>
      </li>
    </div>
  );
};

export default SidebarItem;
