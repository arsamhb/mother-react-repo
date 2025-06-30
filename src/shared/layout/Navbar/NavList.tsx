import React from 'react';
import { NavItem } from './NavItem';
import { NavGroup } from './NavGroup';
import { NavbarData } from './interfaces';

export const NavList: React.FC<{
  items: NavbarData;
  wrapperClass?: string;
}> = ({ items, wrapperClass }) => (
  <ul className={wrapperClass}>
    {items.map((item, idx) =>
      'parent' in item ? <NavGroup key={idx} group={item} /> : <NavItem key={idx} item={item} />
    )}
  </ul>
);
