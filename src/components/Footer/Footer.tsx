import React from 'react';

import FooterSocial from './FooterSocial/FooterSocial';
import FooterLinks from './FooterLinks/FooterLinks';

type FooterLinksItemProps = {
  links?: [];
  socialLinks?: [];
};
export const Footer = ({ links, socialLinks }: FooterLinksItemProps) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__mission-statement">
          Wellcome exists to improve health by helping great ideas to thrive
        </h3>
        {/* @todo add FooterNav component */}
        <FooterSocial socialLinks={socialLinks} />
        <FooterLinks links={links} />
      </div>
    </footer>
  );
};

export default Footer;
