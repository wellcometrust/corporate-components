import React from 'react';

export type FooterNavItemProps = {
  heading: {
    text: string;
    href?: string;
  };
  links?: {
    text: string;
    href: string;
  }[];
  children?: React.ReactNode;
};

export const FooterNavItem = ({
  heading,
  links,
  children
}: FooterNavItemProps) => (
  <li className="footer-nav__grid-item footer-nav__menu">
    {heading.href ? (
      <a
        className="footer-nav__menu-title footer-nav__menu-title--link"
        href={heading.href}
      >
        {heading.text}
      </a>
    ) : (
      <span className="footer-nav__menu-title">{heading.text}</span>
    )}
    {links && (
      <ul className="footer-nav__menu-list">
        {links.map(({ text, href }) => (
          <li className="footer-nav__menu-list-item">
            <a className="footer-nav__menu-list-link" href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    )}
    {children}
  </li>
);

export default FooterNavItem;
