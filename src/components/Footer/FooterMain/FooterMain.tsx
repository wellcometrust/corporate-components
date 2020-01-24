import React from 'react';

import FooterMainNav from './FooterMainNav';

type FooterMainProps = {
  links: [];
};

export const FooterMain = ({ links }: FooterMainProps) => {
  return (
    <>
      {links.map(({ text, href, navLinks }) => (
        <li className="has-children footer-nav__item">
          <a href={href} className="footer-nav__link">
            {text}
          </a>
          <FooterMainNav navLinks={navLinks} />
        </li>
      ))}
    </>
  );
};

export default FooterMain;
