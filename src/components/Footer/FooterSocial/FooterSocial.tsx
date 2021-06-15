import React from 'react';

import FooterSocialItem from './FooterSocialItem';

type FooterSocialProps = {
  links: [];
};

export const FooterSocial = ({ links }: FooterSocialProps) => {
  return (
    <div className="cc-footer-social">
      {links.map(({ text, href }) => (
        <FooterSocialItem
          key={`footer-social-link-${href}`}
          text={text}
          url={href}
        />
      ))}
    </div>
  );
};

export default FooterSocial;
