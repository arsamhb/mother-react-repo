'use client';
import SidebarList from '@/shared/layout/Sidebar/SidebarList';
import React, { useEffect, useState } from 'react';
import { ISideItem } from './SidebarItem';
export type SidebarData = Array<ISideItem>;
const Sidebar: React.FC<{ items: SidebarData }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  useEffect(() => {
    window.addEventListener('toggleSidebar', handleToggle);
    return () => window.removeEventListener('toggleSidebar', handleToggle);
  }, [isOpen]);
  return (
    <nav className={`${isOpen ? 'sidebarOpen' : 'sidebarClose'} flex-shrink-0 `}>
      <div className="w-full h-screen flex flex-col bg-base-100 ">
        <div className="logo m-auto flex justify-start items-center mt-6 mb-4">
          <span className="text-secondary text-2xl text-center font-bold">logo</span>
        </div>
        <div className=" h-full">
          <div>
            <SidebarList items={items} wrapperClass=" w-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
