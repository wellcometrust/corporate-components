/**
 * @deprecated Footer and all non-generic child components are to be moved
 * to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8352}
 */
import React from 'react';

import Link from 'Link';
import Logo from 'Logo';
import constants from 'Logo/constants';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterNav from './FooterNav/FooterNav';

type FooterProps = {
  links?: [];
  navigation?: [];
  socialLinks?: [];
};

export const Footer = ({ links, navigation, socialLinks }: FooterProps) => (
  <footer className="cc-footer o-app">
    <div className="cc-footer__container">
      <h2 className="cc-footer__mission-statement">
        Science to solve the urgent health challenges facing everyone
      </h2>
      {navigation && <FooterNav sections={navigation} />}
      <div className="cc-footer__meta">
        <Link to="/">
          <Logo className="cc-footer__logo" data={constants.medium} />
        </Link>
        {links && <FooterLinks links={links} />}
        {socialLinks && <FooterSocial links={socialLinks} />}
        <div className="cc-footer__top">
          <Link className="cc-footer__top-link" to="#top" id="link-back-to-top">
            Back to top
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
