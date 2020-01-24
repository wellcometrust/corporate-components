import React from 'react';

type FooterMainNavItemProps = {
  text?: string;
  url?: string;
};

export const FooterMainNavItem = ({ text, url }: FooterMainNavItemProps) => {
  return (
    <li className="footer-nav__item">
      <a href={url} className="footer-nav__link">
        {text}
      </a>
    </li>
  );
};

export default FooterMainNavItem;
