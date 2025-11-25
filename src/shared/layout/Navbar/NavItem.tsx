import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';
import { INavItem } from './interfaces';

export const NavItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { isAuthenticated } = useAuth();

  if (item.needsAuthenticatedUser && !isAuthenticated) return null;

  return (
    <li className="text-white hover:font-extrabold hover:text-primary">
      <Link href={item.linkURL}>{item.title}</Link>
    </li>
  );
};
