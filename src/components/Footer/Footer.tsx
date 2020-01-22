import React from 'react';

import FooterLinks from './FooterLinks/FooterLinks';

type FooterLinksItemProps = {
  links?: [];
};

export const Footer = ({ links }: FooterLinksItemProps) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__mission-statement">
          Wellcome exists to improve health by helping great ideas to thrive
        </h3>
        {/* @todo add FooterNav component */}
        {/* @todo get FooterSocial component */}
        <FooterLinks links={links} />
      </div>
    </footer>
  );
};

export default Footer;