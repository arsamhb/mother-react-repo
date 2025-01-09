import React from "react";
import {
  INavbarGroup,
  INavbarItem,
} from "@/shared/component/layout/Navbar/navbar.interface";
import Link from "next/link";
import logoAddress from "@public/img/logo/logo.svg";
import Image from "next/image";

interface NavbarProps {
  title: string;
  items?: Array<INavbarItem | INavbarGroup>;
}

const Navbar: React.FC<NavbarProps> = ({ items, title }) => {
  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {items &&
              items.map((item, index) => {
                if ("parent" in item) {
                  return (
                    <div key={index}>
                      <a>{item.parent}</a>
                      <ul className="p-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link href={child.linkURL}>{child.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link href={item.linkURL}>{item.title}</Link>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
        <Link href={"/"} className="text-xl flex items-center">
          {title}
          <Image
            src={logoAddress}
            width={25}
            height={25}
            alt="the-business-logo"
          />
        </Link>
      </div>
      <div className="custom-navbar-end">
        <ul className="menu menu-horizontal px-1">
          {items &&
            items.map((item, index) => {
              if ("parent" in item) {
                return (
                  <li key={index}>
                    <details>
                      <summary>{item.parent}</summary>
                      <ul className="p-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link href={child.linkURL}>{child.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link href={item.linkURL}>{item.title}</Link>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
