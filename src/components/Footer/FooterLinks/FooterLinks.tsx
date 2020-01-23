import React from 'react';

import FooterLinksItem from './FooterLinksItem';

type FooterLinksProps = {
  links: [];
};

export const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <div className="footer-links">
      {links.map(({ text, href, target, rel, role, tabIndex }) => (
        <FooterLinksItem
          text={text}
          url={href}
          target={target}
          rel={rel}
          role={role}
          tabIndex={tabIndex}
        />
      ))}
    </div>
  );
};

export default FooterLinks;
