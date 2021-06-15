import React from 'react';

import FooterNewsletter from '../FooterNewsletter/FooterNewsletter';
import FooterNavItem, { FooterNavItemProps } from './FooterNavItem';

export type FooterNavProps = {
  sections: FooterNavItemProps[];
};

export const FooterNav = ({ sections }: FooterNavProps) => (
  <nav className="cc-footer-nav" id="footer-nav">
    <ul className="cc-footer-nav__grid">
      {sections.map(section => (
        <FooterNavItem
          key={`footer-nav-item-${section.heading.text}`}
          {...section}
        />
      ))}
    </ul>
    <FooterNewsletter />
  </nav>
);

export default FooterNav;
