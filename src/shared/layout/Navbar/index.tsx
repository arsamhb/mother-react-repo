'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';
import { NavList } from './NavList';
import type { INavItem, INavGroup } from './interfaces';
import Button from '@/shared/UI/Button';
// import BackButton from '@/shared/UI/BackButton';

export interface NavbarProps {
  itemsLeft?: Array<INavItem | INavGroup>;
  itemsRight?: Array<INavItem | INavGroup>;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ itemsLeft = [], itemsRight = [], title }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      {/* Top bar */}
      <div className="flex flex-row-reverse justify-between items-center text-primary-content bg-primary h-[42px] standard-horizontal-padding">
        <Link href="/" className="text-xl flex items-center">
          {title}
        </Link>
        <div className="flex gap-2">
          {/* <BackButton /> */}
          {isAuthenticated ? (
            <Button variant="primary" onClick={logout}>
              خروج
            </Button>
          ) : (
            <Button variant="primary">
              <Link href="/auth">ورود</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar bg-secondary text-secondary-content standard-horizontal-padding">
        {/* Mobile */}
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            {/* burger icon */}
            <button />
            <div className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavList items={itemsRight} wrapperClass="menu menu-sm" />
              <NavList items={itemsLeft} wrapperClass="menu menu-sm" />
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex justify-between w-full">
          <NavList items={itemsRight} wrapperClass="menu menu-horizontal px-1" />
          <NavList items={itemsLeft} wrapperClass="menu menu-horizontal px-1" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
