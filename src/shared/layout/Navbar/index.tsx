'use client';

import React from 'react';
import Link from 'next/link';
import { NavList } from './NavList';
import { useTheme } from '@/shared/hooks/useTheme';
import type { INavItem, INavGroup } from './interfaces';

export interface NavbarProps {
  itemsLeft?: Array<INavItem | INavGroup>;
  itemsRight?: Array<INavItem | INavGroup>;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ itemsLeft = [], itemsRight = [], title }) => {
  const { isDark, handleThemeToggle } = useTheme();

  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center text-primary-content bg-primary h-[42px] standard-horizontal-padding">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm">🌕</span>
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => handleThemeToggle(e.target.checked)}
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
            <span className="text-sm">☀️</span>
          </label>
          <Link href="/" className="text-xl flex items-center">
            {title}
          </Link>
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
