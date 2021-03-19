/**
 * @deprecated Footer and all non-generic child components are to be moved
 * to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8352}
 */
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
  <footer className="footer o-app">
    <div className="footer__container">
      <h3 className="footer__mission-statement">
        Science to solve the urgent health challenges facing everyone
      </h3>
      {navigation && <FooterNav sections={navigation} />}
      {socialLinks && <FooterSocial links={socialLinks} />}
      {links && <FooterLinks links={links} />}
    </div>
  </footer>
);

export default Footer;
