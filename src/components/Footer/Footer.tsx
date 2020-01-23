import React from 'react';

import FooterSocial from './FooterSocial/FooterSocial';
import FooterLinks from './FooterLinks/FooterLinks';

type FooterProps = {
  links?: [];
  socialLinks?: [];
};

export const Footer = ({ links, socialLinks }: FooterProps) => (
  <footer className="footer">
    <div className="footer__container">
      <h3 className="footer__mission-statement">
        Wellcome exists to improve health by helping great ideas to thrive
      </h3>
      {/* @todo: #5988 add FooterNav component */}
      <FooterSocial links={socialLinks} />
      <FooterLinks links={links} />
    </div>
  </footer>
);

export default Footer;
