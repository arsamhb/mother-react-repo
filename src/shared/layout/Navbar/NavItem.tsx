import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';
import { useUser } from '@/context/UserContext';
import { INavItem } from './interfaces';

export const NavItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();

  if (item.needsAuthenticatedUser && !isAuthenticated) return null;
  if (item.rolesAllowed?.length && (!user || !item.rolesAllowed.includes(user.role))) {
    return null;
  }

  return (
    <li className="text-white hover:font-extrabold hover:text-primary">
      <Link href={item.linkURL}>{item.title}</Link>
    </li>
  );
};
