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
      <h3 className="cc-footer__mission-statement">
        Science to solve the urgent health challenges facing everyone
      </h3>
      {navigation && <FooterNav sections={navigation} />}
      <div className="cc-footer__meta u-pos-rel">
        <Link to="/">
          <Logo
            className="c-footer__logo"
            title="Wellcome"
            data={constants.medium}
          />
        </Link>
        {links && <FooterLinks links={links} />}
        {socialLinks && <FooterSocial links={socialLinks} />}
        <div>
          <Link className="cc-footer__top-link" to="#top" id="link-back-to-top">
            Back to top
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
