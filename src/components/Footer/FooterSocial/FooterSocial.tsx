import React from 'react';

import FooterSocialItem from './FooterSocialItem';

type FooterSocialProps = {
  socialLinks: [];
};

export const FooterSocial = ({ socialLinks }: FooterSocialProps) => {
  return (
    <div className="footer-social">
      {socialLinks.map(({ text, className, href }) => (
        <FooterSocialItem text={text} className={className} url={href} />
      ))}
    </div>
  );
};

export default FooterSocial;
