import React from 'react';

import FooterMain from './FooterMain/FooterMain';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterLinks from './FooterLinks/FooterLinks';

type FooterProps = {
  links?: [];
  mainLinks?: [];
  socialLinks?: [];
};

export const Footer = ({ links, mainLinks, socialLinks }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__mission-statement">
          Wellcome exists to improve health by helping great ideas to thrive
        </h3>
        <nav id="footer-nav" className="footer-nav">
          <ul className="footer-nav__list footer-nav__list--grid">
            <FooterMain links={mainLinks} />
          </ul>
        </nav>

        <FooterSocial links={socialLinks} />
        <FooterLinks links={links} />
      </div>
    </footer>
  );
};

export default Footer;
