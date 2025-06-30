import React from 'react';
import { NavItem } from './NavItem';
import { INavGroup } from './interfaces';

export const NavGroup: React.FC<{ group: INavGroup }> = ({ group }) => (
  <li>
    <details>
      <summary>{group.parent}</summary>
      <ul className="p-2 flex flex-col bg-custom-purple-light rounded-t gap-sm w-40">
        {group.children.map((child, i) => (
          <NavItem key={i} item={child} />
        ))}
      </ul>
    </details>
  </li>
);
