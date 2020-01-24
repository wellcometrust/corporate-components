import React from 'react';

import FooterMainNavItem from './FooterMainNavItem';

type FooterMainNavProps = {
  navLinks?: [];
};

export const FooterMainNav = ({ navLinks }: FooterMainNavProps) => {
  return (
    <ul className="footer-nav__list footer-nav-submenu">
      {navLinks.map(({ text, url }) => (
        <FooterMainNavItem text={text} url={url} />
      ))}
    </ul>
  );
};

export default FooterMainNav;
