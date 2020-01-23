import React from 'react';

import FooterSocialItem from './FooterSocialItem';

type FooterSocialProps = {
  links: [];
};

export const FooterSocial = ({ links }: FooterSocialProps) => {
  return (
    <div className="footer-social">
      {links.map(({ text, href }) => (
        <FooterSocialItem text={text} url={href} />
      ))}
    </div>
  );
};

export default FooterSocial;
