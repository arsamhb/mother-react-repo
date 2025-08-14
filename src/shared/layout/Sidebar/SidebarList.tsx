import React from 'react';
import { SidebarData } from '.';
import SidebarItem from './SidebarItem';
const SidebarList: React.FC<{ items: SidebarData; wrapperClass?: string }> = ({
  items,
  wrapperClass,
}) => {
  return (
    <ul className={wrapperClass}>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default SidebarList;
