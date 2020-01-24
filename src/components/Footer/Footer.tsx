import React from 'react';

import FooterSocial from './FooterSocial/FooterSocial';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterNav from './FooterNav/FooterNav';

type FooterProps = {
  links?: [];
  navigation?: [];
  socialLinks?: [];
};

export const Footer = ({ links, navigation, socialLinks }: FooterProps) => (
  <footer className="footer">
    <div className="footer__container">
      <h3 className="footer__mission-statement">
        Wellcome exists to improve health by helping great ideas to thrive
      </h3>
      {navigation && <FooterNav sections={navigation} />}
      {socialLinks && <FooterSocial links={socialLinks} />}
      {links && <FooterLinks links={links} />}
    </div>
  </footer>
);

export default Footer;
