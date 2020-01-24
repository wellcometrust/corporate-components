import React from 'react';

import FooterNewsletter from '../FooterNewsletter/FooterNewsletter';
import FooterNavItem, { FooterNavItemProps } from './FooterNavItem';

export type FooterNavProps = {
  sections: FooterNavItemProps[];
};

export const FooterNav = ({ sections }: FooterNavProps) => (
  <nav id="footer-nav">
    <ul>
      {sections.map(section => (
        <FooterNavItem {...section} />
      ))}
      <FooterNavItem heading={{ text: 'Newsletter' }}>
        <FooterNewsletter />
      </FooterNavItem>
    </ul>
  </nav>
);

export default FooterNav;
