import React from 'react';

import Link from 'Link';

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
  <li className="cc-footer-nav__grid-item cc-footer-nav__menu">
    {heading.href ? (
      <Link
        className="cc-footer-nav__menu-title cc-footer-nav__menu-title--link"
        to={heading.href}
      >
        {heading.text}
      </Link>
    ) : (
      <span className="cc-footer-nav__menu-title">{heading.text}</span>
    )}
    {links && (
      <ul className="cc-footer-nav__menu-list">
        {links.map(({ text, href }) => (
          <li
            key={`footer-menu-item-${href}`}
            className="cc-footer-nav__menu-list-item"
          >
            <Link to={href} className="cc-footer-nav__menu-list-link">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    )}
    {children}
  </li>
);

export default FooterNavItem;
