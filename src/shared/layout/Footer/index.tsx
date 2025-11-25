import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logoAddress from '@public/img/logo/logo.svg';

export interface IFooterLink {
  title: string;
  url: string;
}

export interface IFooterGroup {
  title: string;
  links: Array<IFooterLink>;
}

export interface FooterProps {
  linkGroups: Array<IFooterGroup>;
}

const Footer: React.FC<FooterProps> = ({ linkGroups }) => {
  return (
    <footer className="flex items-center flex-col justify-between text-secondary-content standard-horizontal-padding bg-secondary">
      <section className="flex items-center flex-col md:flex-row justify-between w-full py-md">
        <aside>
          <Image src={logoAddress} width={100} height={100} alt="the-business-logo" />
          <p>
            A code base
            <br />
            To set you free
          </p>
        </aside>
        {linkGroups.map((item, i) => {
          return (
            <nav className="flex items-start flex-col justify-between" key={i}>
              <h6 className="footer-title">{item.title}</h6>
              {item.links.map((link, idx) => {
                return (
                  <Link href={link.url} key={idx} className="link link-hover">
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
